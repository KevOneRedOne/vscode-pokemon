import * as vscode from 'vscode';
import { getEvolutionData } from '../common/evolution-data';
import { POKEMON_DATA } from '../common/pokemon-data';
import { PokemonSize, PokemonType } from '../common/types';
import { PokemonSpecification, storeCollectionAsMemento } from './extension';

/**
 * Configuration for XP gain
 */
const XP_CONFIG = {
  // XP per character typed
  xpPerCharacter: 0.5,
  // XP per line added
  xpPerLine: 2,
  // XP for saving a file
  xpForSave: 10,
  // Minimum time between XP gains (ms) to prevent spam
  minTimeBetweenGains: 1000,
  // XP gain batch cooldown (ms)
  batchCooldown: 2000,
};

export class ExperienceManager {
  private context: vscode.ExtensionContext;
  private disposables: vscode.Disposable[] = [];
  private lastXpGainTime: number = 0;
  private pendingXp: number = 0;
  private batchTimer: NodeJS.Timeout | undefined;
  private enabled: boolean = true;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    // Read initial configuration
    this.enabled = vscode.workspace
      .getConfiguration('vscode-pokemon')
      .get<boolean>('enableXpTracking', true);
    this.setupListeners();
  }

  /**
   * Enable or disable XP tracking
   */
  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Check if XP tracking is enabled
   */
  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Setup event listeners for coding activity
   */
  private setupListeners(): void {
    // Listen for text document changes
    this.disposables.push(
      vscode.workspace.onDidChangeTextDocument((event) => {
        if (!this.enabled) {
          return;
        }

        const changes = event.contentChanges;
        if (changes.length === 0) {
          return;
        }

        // Calculate XP from changes
        let xpGained = 0;
        for (const change of changes) {
          const text = change.text;
          // Count characters typed
          xpGained += text.length * XP_CONFIG.xpPerCharacter;
          // Count new lines added
          const linesAdded = (text.match(/\n/g) || []).length;
          xpGained += linesAdded * XP_CONFIG.xpPerLine;
        }

        this.addPendingXp(xpGained);
      }),
    );

    // Listen for file saves
    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument(() => {
        if (!this.enabled) {
          return;
        }
        this.addPendingXp(XP_CONFIG.xpForSave);
      }),
    );
  }

  /**
   * Add XP to the pending queue (batched to avoid too frequent updates)
   */
  private addPendingXp(xp: number): void {
    this.pendingXp += xp;

    // Clear existing timer
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
    }

    // Set a new timer to process the batch
    this.batchTimer = setTimeout(() => {
      void this.processPendingXp();
    }, XP_CONFIG.batchCooldown);
  }

  /**
   * Process pending XP and update Pokemon
   */
  private async processPendingXp(): Promise<void> {
    if (this.pendingXp <= 0) {
      return;
    }

    const xpToAdd = Math.floor(this.pendingXp);
    this.pendingXp = 0;

    console.log(`[Pokemon XP] Processing ${xpToAdd} XP for all Pokemon`);
    await this.giveXpToAllPokemon(xpToAdd);
  }

  /**
   * Give XP to all Pokemon and check for evolutions
   */
  private async giveXpToAllPokemon(xp: number): Promise<void> {
    const collection = PokemonSpecification.collectionFromMemento(
      this.context,
      vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('pokemonSize', PokemonSize.medium),
    );

    if (collection.length === 0) {
      return;
    }

    let anyEvolved = false;
    const evolvedPokemon: Array<{ oldName: string; newType: PokemonType }> = [];

    for (const pokemon of collection) {
      const oldXp = pokemon.experience;
      pokemon.experience += xp;

      console.log(
        `[Pokemon XP] ${pokemon.name} (${pokemon.type}): ${oldXp} + ${xp} = ${pokemon.experience} XP`,
      );

      // Check if this Pokemon can evolve
      const evolutionData = getEvolutionData(pokemon.type);
      if (
        evolutionData &&
        evolutionData.evolvesTo &&
        pokemon.experience >= evolutionData.xpToEvolve
      ) {
        // Pokemon is ready to evolve!
        console.log(
          `[Pokemon XP] ${pokemon.name} is evolving! ${pokemon.type} → ${evolutionData.evolvesTo}`,
        );
        const newType = evolutionData.evolvesTo;
        pokemon.type = newType;
        pokemon.experience = 0; // Reset XP for the new form
        pokemon.generation = `gen${POKEMON_DATA[newType].generation}`;
        pokemon.originalSpriteSize =
          POKEMON_DATA[newType].originalSpriteSize || 32;
        anyEvolved = true;
        evolvedPokemon.push({ oldName: pokemon.name, newType });
      }
    }

    // Save the updated collection
    await storeCollectionAsMemento(this.context, collection);

    // Show evolution notification
    if (anyEvolved) {
      console.log(
        `[Pokemon XP] ${evolvedPokemon.length} Pokemon evolved, refreshing UI...`,
      );

      // Trigger a UI update by sending a message to the panel
      // Execute refresh first, THEN show notifications
      setTimeout(async () => {
        console.log('[Pokemon XP] Triggering pokemon refresh command...');
        await vscode.commands.executeCommand('vscode-pokemon.refresh-pokemon');

        // Show notifications after refresh completes
        setTimeout(() => {
          for (const evolved of evolvedPokemon) {
            const pokemonData = POKEMON_DATA[evolved.newType];
            void vscode.window.showInformationMessage(
              vscode.l10n.t(
                '🎉 {0} evolved into {1}!',
                evolved.oldName,
                pokemonData.name,
              ),
            );
          }
        }, 500);
      }, 300);
    }
  }

  /**
   * Manually give XP to a specific Pokemon by name
   */
  public async giveXpToPokemon(pokemonName: string, xp: number): Promise<void> {
    const collection = PokemonSpecification.collectionFromMemento(
      this.context,
      vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('pokemonSize', PokemonSize.medium),
    );

    const pokemon = collection.find((p) => p.name === pokemonName);
    if (!pokemon) {
      void vscode.window.showErrorMessage(
        vscode.l10n.t('Pokemon {0} not found.', pokemonName),
      );
      return;
    }

    pokemon.experience += xp;

    // Check for evolution
    const evolutionData = getEvolutionData(pokemon.type);
    if (
      evolutionData &&
      evolutionData.evolvesTo &&
      pokemon.experience >= evolutionData.xpToEvolve
    ) {
      const newType = evolutionData.evolvesTo;
      pokemon.type = newType;
      pokemon.experience = 0;
      pokemon.generation = `gen${POKEMON_DATA[newType].generation}`;
      pokemon.originalSpriteSize =
        POKEMON_DATA[newType].originalSpriteSize || 32;

      const pokemonData = POKEMON_DATA[newType];
      void vscode.window.showInformationMessage(
        vscode.l10n.t(
          '🎉 {0} evolved into {1}!',
          pokemonName,
          pokemonData.name,
        ),
      );
    }

    await storeCollectionAsMemento(this.context, collection);
  }

  /**
   * Get Pokemon stats (name, type, XP, evolution info)
   */
  public async getPokemonStats(): Promise<string> {
    const collection = PokemonSpecification.collectionFromMemento(
      this.context,
      vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get('pokemonSize', PokemonSize.medium),
    );

    if (collection.length === 0) {
      return vscode.l10n.t('No Pokemon found.');
    }

    const stats: string[] = [];

    for (const pokemon of collection) {
      const pokemonData = POKEMON_DATA[pokemon.type];
      const evolutionData = getEvolutionData(pokemon.type);

      let evolutionInfo = '';
      if (evolutionData?.evolvesTo) {
        const progress = Math.min(
          100,
          (pokemon.experience / evolutionData.xpToEvolve) * 100,
        );
        const nextEvolution = POKEMON_DATA[evolutionData.evolvesTo];
        evolutionInfo = ` | 📊 ${pokemon.experience}/${evolutionData.xpToEvolve} XP (${progress.toFixed(0)}%) → ${nextEvolution.name}`;
      } else {
        evolutionInfo = ` | ⭐ Max Evolution (${pokemon.experience} XP)`;
      }

      stats.push(`🔹 ${pokemon.name} (${pokemonData.name})${evolutionInfo}`);
    }

    return stats.join('\n');
  }

  /**
   * Dispose of all listeners
   */
  public dispose(): void {
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
    }
    this.disposables.forEach((d) => d.dispose());
    this.disposables = [];
  }
}
