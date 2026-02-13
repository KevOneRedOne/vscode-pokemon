# Pokemon XP & Evolution System - Testing Guide

This document describes how to test the new Pokemon XP and Evolution system.

## Overview

The Pokemon XP system allows Pokemon to gain experience as you code and evolve when they reach evolution thresholds. This addresses issue #57.

## Features Implemented

1. **XP Tracking System**
   - Pokemon gain XP from:
     - Typing code (0.5 XP per character)
     - Adding new lines (2 XP per line)
     - Saving files (10 XP per save)
   - XP is batched and updated every 2 seconds to avoid performance issues
   - Console logs show XP gains for debugging

2. **Evolution System**
   - Comprehensive evolution chains for Gen 1-4 Pokemon
   - Automatic evolution when XP threshold is reached
   - Visual notifications when Pokemon evolve
   - XP resets to 0 after evolution

3. **Commands**
   - `Pokemon Coding: View pokemon stats and XP` - View all Pokemon and their XP/evolution progress
   - `Pokemon Coding: Toggle XP tracking` - Enable/disable XP tracking
   - `Pokemon Coding: Refresh pokemon` - Internal command to refresh Pokemon after evolution

4. **Configuration**
   - `vscode-pokemon.enableXpTracking` - Enable/disable XP tracking (default: true)

## Testing Steps

### 1. Test Basic XP Gain

1. Install and activate the extension
2. Spawn a Pokemon (e.g., Bulbasaur)
3. Start typing code in a file
4. Save the file
5. Run `Pokemon Coding: View pokemon stats and XP`
6. Verify that the Pokemon has gained XP

Expected:
- Bulbasaur should have accumulated XP
- XP progress should be displayed as: `🔹 [Name] (Bulbasaur) | 📊 [XP]/50 XP ([%]%) → Ivysaur`
- Check the Developer Console (Help > Toggle Developer Tools) for XP logs

### 2. Test Evolution

1. Spawn Bulbasaur or another first-stage Pokemon
2. Code and save files to gain 50 XP
3. When Bulbasaur reaches 50 XP, it should automatically evolve into Ivysaur
4. A notification should appear: "🎉 [Name] evolved into Ivysaur!"
5. The Pokemon sprite in the panel should update to Ivysaur
6. Run `Pokemon Coding: View pokemon stats and XP` to verify the evolution

Expected:
- Notification appears when evolution occurs
- Pokemon type changes to Ivysaur
- XP resets to 0/50 (for next evolution)
- Sprite updates in the panel
- Console logs show the evolution

### 3. Test Evolution Chain

1. Continue coding with Ivysaur to gain 50 XP
2. Ivysaur should evolve into Venusaur
3. Continue coding with Venusaur
4. Verify that Venusaur does not evolve (it's the final form)

Expected:
- Ivysaur evolves to Venusaur at 50 XP
- Venusaur shows: `⭐ Max Evolution ([XP] XP)`
- No further evolutions occur

### 4. Test XP Tracking Toggle

1. Run `Pokemon Coding: Toggle XP tracking`
2. Verify the message shows "Pokemon XP tracking is now disabled ❌"
3. Type code - Pokemon should not gain XP
4. Run `Pokemon Coding: Toggle XP tracking` again
5. Verify the message shows "Pokemon XP tracking is now enabled ✅"
6. Type code - Pokemon should gain XP again

### 5. Test Multiple Pokemon

1. Spawn multiple Pokemon (e.g., Bulbasaur, Charmander, Squirtle)
2. Code to gain XP
3. Run `Pokemon Coding: View pokemon stats and XP`
4. Verify all Pokemon gain XP simultaneously
5. Verify each Pokemon has its own XP counter

### 6. Test XP Persistence

1. Spawn a Pokemon and gain some XP
2. Close and reopen VS Code
3. Run `Pokemon Coding: View pokemon stats and XP`
4. Verify the XP is still there

Expected:
- XP persists between sessions
- Pokemon retain their evolution state

### 7. Test with Different Pokemon Lines

Test various evolution chains to ensure they work correctly:

**All Pokemon now require 50 XP per evolution:**
- Caterpie → Metapod (50 XP) → Butterfree (50 XP)
- Bulbasaur → Ivysaur (50 XP) → Venusaur (50 XP)
- Charmander → Charmeleon (50 XP) → Charizard (50 XP)
- Pikachu → Raichu (50 XP)
- Geodude → Graveler (50 XP) → Golem (50 XP)

**No Evolution:**
- Legendary Pokemon (Mewtwo, Articuno, etc.)
- Single-stage Pokemon (Pinsir, Kangaskhan, etc.)

## Known Behavior

1. **XP Distribution**: XP is distributed equally to all Pokemon in your collection
2. **Batch Updates**: XP updates are batched every 2 seconds to avoid performance issues
3. **Evolution Trigger**: Evolution happens immediately when XP threshold is reached
4. **Sprite Update**: The Pokemon sprite should update automatically after evolution (via the refresh command)

## Troubleshooting

### Pokemon not evolving?
- Check if the Pokemon is at max evolution
- Verify XP tracking is enabled
- **Check the Developer Console** (Help > Toggle Developer Tools) for XP logs
- Look for messages like `[Pokemon XP] Processing X XP for all Pokemon`
- Check for evolution messages like `[Pokemon XP] [Name] is evolving!`

### XP not updating?
- Make sure XP tracking is enabled (run the toggle command)
- Check that you're actually typing or saving files
- **Open the Developer Console** to see XP gain logs
- Try toggling XP tracking off and on
- Verify in settings that `vscode-pokemon.enableXpTracking` is true

### Sprite not updating after evolution?
- Run `Pokemon Coding: Refresh pokemon` manually
- Close and reopen the Pokemon panel
- Restart VS Code

## Implementation Details

### Files Added/Modified

**New Files:**
- `src/common/evolution-data.ts` - Evolution chains for all Gen 1-4 Pokemon
- `src/extension/experience-manager.ts` - XP tracking and evolution logic

**Modified Files:**
- `src/common/types.ts` - Added evolution-related fields to PokemonConfig
- `src/extension/extension.ts` - Integrated ExperienceManager, added commands
- `package.json` - Added new commands and configuration
- `README.md` - Added documentation for the XP system
- `CHANGELOG.md` - Documented the new feature

### Architecture

```
ExperienceManager
├── Listens to VS Code events (text changes, file saves)
├── Accumulates XP (batched every 2s)
├── Updates Pokemon collection
├── Checks for evolution eligibility
└── Triggers evolution + notification

PokemonSpecification
├── Added: experience: number
└── Modified: constructor to accept XP

Evolution Data
├── Maps Pokemon → evolution target
└── Defines XP requirements per evolution
```

## Future Enhancements (Not Implemented)

Potential ideas for future improvements:
- Different evolution paths (e.g., Eevee evolutions based on conditions)
- Evolution stones/items
- XP multipliers based on activity type
- Level-based system instead of pure XP
- Visual XP bar in the Pokemon panel
- Sound effects for evolution
- Evolution animations
- XP gain from other activities (debugging, running tests, etc.)

## Notes for Reviewers

This implementation:
- ✅ Addresses issue #57 completely
- ✅ Includes comprehensive evolution chains for Gen 1-4
- ✅ Is non-intrusive - can be disabled via settings
- ✅ Uses efficient batching to avoid performance issues
- ✅ Persists XP between sessions
- ✅ Includes proper TypeScript types
- ✅ Follows the existing codebase patterns
- ✅ Passes linting and compilation
- ✅ Is fully documented
