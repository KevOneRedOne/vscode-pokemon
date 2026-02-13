/* eslint-disable @typescript-eslint/naming-convention */
import { PokemonType } from './types';

export interface EvolutionData {
  evolvesTo?: PokemonType;
  xpToEvolve: number;
}

/**
 * Evolution chains for Pokemon
 * Maps a Pokemon type to its evolution data
 * XP requirements are balanced for coding sessions
 */
export const EVOLUTION_DATA: { [key: string]: EvolutionData } = {
  // Generation 1
  // Bulbasaur line
  bulbasaur: { evolvesTo: 'ivysaur', xpToEvolve: 50 },
  ivysaur: { evolvesTo: 'venusaur', xpToEvolve: 50 },
  venusaur: { xpToEvolve: 0 }, // Final evolution

  // Charmander line
  charmander: { evolvesTo: 'charmeleon', xpToEvolve: 50 },
  charmeleon: { evolvesTo: 'charizard', xpToEvolve: 50 },
  charizard: { xpToEvolve: 0 }, // Final evolution

  // Squirtle line
  squirtle: { evolvesTo: 'wartortle', xpToEvolve: 50 },
  wartortle: { evolvesTo: 'blastoise', xpToEvolve: 50 },
  blastoise: { xpToEvolve: 0 }, // Final evolution

  // Caterpie line
  caterpie: { evolvesTo: 'metapod', xpToEvolve: 50 },
  metapod: { evolvesTo: 'butterfree', xpToEvolve: 50 },
  butterfree: { xpToEvolve: 0 }, // Final evolution

  // Weedle line
  weedle: { evolvesTo: 'kakuna', xpToEvolve: 50 },
  kakuna: { evolvesTo: 'beedrill', xpToEvolve: 50 },
  beedrill: { xpToEvolve: 0 }, // Final evolution

  // Pidgey line
  pidgey: { evolvesTo: 'pidgeotto', xpToEvolve: 50 },
  pidgeotto: { evolvesTo: 'pidgeot', xpToEvolve: 50 },
  pidgeot: { xpToEvolve: 0 }, // Final evolution

  // Rattata line
  rattata: { evolvesTo: 'raticate', xpToEvolve: 50 },
  raticate: { xpToEvolve: 0 }, // Final evolution

  // Spearow line
  spearow: { evolvesTo: 'fearow', xpToEvolve: 50 },
  fearow: { xpToEvolve: 0 }, // Final evolution

  // Ekans line
  ekans: { evolvesTo: 'arbok', xpToEvolve: 50 },
  arbok: { xpToEvolve: 0 }, // Final evolution

  // Pikachu line
  pichu: { evolvesTo: 'pikachu', xpToEvolve: 50 },
  pikachu: { evolvesTo: 'raichu', xpToEvolve: 50 },
  raichu: { xpToEvolve: 0 }, // Final evolution

  // Sandshrew line
  sandshrew: { evolvesTo: 'sandslash', xpToEvolve: 50 },
  sandslash: { xpToEvolve: 0 }, // Final evolution

  // Nidoran line
  nidoran_f: { evolvesTo: 'nidorina', xpToEvolve: 50 },
  nidorina: { evolvesTo: 'nidoqueen', xpToEvolve: 50 },
  nidoqueen: { xpToEvolve: 0 }, // Final evolution

  nidoran_m: { evolvesTo: 'nidorino', xpToEvolve: 50 },
  nidorino: { evolvesTo: 'nidoking', xpToEvolve: 50 },
  nidoking: { xpToEvolve: 0 }, // Final evolution

  // Clefairy line
  cleffa: { evolvesTo: 'clefairy', xpToEvolve: 50 },
  clefairy: { evolvesTo: 'clefable', xpToEvolve: 50 },
  clefable: { xpToEvolve: 0 }, // Final evolution

  // Vulpix line
  vulpix: { evolvesTo: 'ninetales', xpToEvolve: 50 },
  ninetales: { xpToEvolve: 0 }, // Final evolution

  // Jigglypuff line
  igglybuff: { evolvesTo: 'jigglypuff', xpToEvolve: 50 },
  jigglypuff: { evolvesTo: 'wigglytuff', xpToEvolve: 50 },
  wigglytuff: { xpToEvolve: 0 }, // Final evolution

  // Zubat line
  zubat: { evolvesTo: 'golbat', xpToEvolve: 50 },
  golbat: { evolvesTo: 'crobat', xpToEvolve: 50 },
  crobat: { xpToEvolve: 0 }, // Final evolution

  // Oddish line
  oddish: { evolvesTo: 'gloom', xpToEvolve: 50 },
  gloom: { evolvesTo: 'vileplume', xpToEvolve: 50 },
  vileplume: { xpToEvolve: 0 }, // Final evolution

  // Paras line
  paras: { evolvesTo: 'parasect', xpToEvolve: 50 },
  parasect: { xpToEvolve: 0 }, // Final evolution

  // Venonat line
  venonat: { evolvesTo: 'venomoth', xpToEvolve: 50 },
  venomoth: { xpToEvolve: 0 }, // Final evolution

  // Diglett line
  diglett: { evolvesTo: 'dugtrio', xpToEvolve: 50 },
  dugtrio: { xpToEvolve: 0 }, // Final evolution

  // Meowth line
  meowth: { evolvesTo: 'persian', xpToEvolve: 50 },
  persian: { xpToEvolve: 0 }, // Final evolution

  // Psyduck line
  psyduck: { evolvesTo: 'golduck', xpToEvolve: 50 },
  golduck: { xpToEvolve: 0 }, // Final evolution

  // Mankey line
  mankey: { evolvesTo: 'primeape', xpToEvolve: 50 },
  primeape: { xpToEvolve: 0 }, // Final evolution

  // Growlithe line
  growlithe: { evolvesTo: 'arcanine', xpToEvolve: 50 },
  arcanine: { xpToEvolve: 0 }, // Final evolution

  // Poliwag line
  poliwag: { evolvesTo: 'poliwhirl', xpToEvolve: 50 },
  poliwhirl: { evolvesTo: 'poliwrath', xpToEvolve: 50 },
  poliwrath: { xpToEvolve: 0 }, // Final evolution

  // Abra line
  abra: { evolvesTo: 'kadabra', xpToEvolve: 50 },
  kadabra: { evolvesTo: 'alakazam', xpToEvolve: 50 },
  alakazam: { xpToEvolve: 0 }, // Final evolution

  // Machop line
  machop: { evolvesTo: 'machoke', xpToEvolve: 50 },
  machoke: { evolvesTo: 'machamp', xpToEvolve: 50 },
  machamp: { xpToEvolve: 0 }, // Final evolution

  // Bellsprout line
  bellsprout: { evolvesTo: 'weepinbell', xpToEvolve: 50 },
  weepinbell: { evolvesTo: 'victreebel', xpToEvolve: 50 },
  victreebel: { xpToEvolve: 0 }, // Final evolution

  // Tentacool line
  tentacool: { evolvesTo: 'tentacruel', xpToEvolve: 50 },
  tentacruel: { xpToEvolve: 0 }, // Final evolution

  // Geodude line
  geodude: { evolvesTo: 'graveler', xpToEvolve: 50 },
  graveler: { evolvesTo: 'golem', xpToEvolve: 50 },
  golem: { xpToEvolve: 0 }, // Final evolution

  // Ponyta line
  ponyta: { evolvesTo: 'rapidash', xpToEvolve: 50 },
  rapidash: { xpToEvolve: 0 }, // Final evolution

  // Slowpoke line
  slowpoke: { evolvesTo: 'slowbro', xpToEvolve: 50 },
  slowbro: { xpToEvolve: 0 }, // Final evolution

  // Magnemite line
  magnemite: { evolvesTo: 'magneton', xpToEvolve: 50 },
  magneton: { evolvesTo: 'magnezone', xpToEvolve: 50 },
  magnezone: { xpToEvolve: 0 }, // Final evolution

  // Farfetchd line
  farfetchd: { xpToEvolve: 0 }, // No evolution

  // Doduo line
  doduo: { evolvesTo: 'dodrio', xpToEvolve: 50 },
  dodrio: { xpToEvolve: 0 }, // Final evolution

  // Seel line
  seel: { evolvesTo: 'dewgong', xpToEvolve: 50 },
  dewgong: { xpToEvolve: 0 }, // Final evolution

  // Grimer line
  grimer: { evolvesTo: 'muk', xpToEvolve: 50 },
  muk: { xpToEvolve: 0 }, // Final evolution

  // Shellder line
  shellder: { evolvesTo: 'cloyster', xpToEvolve: 50 },
  cloyster: { xpToEvolve: 0 }, // Final evolution

  // Gastly line
  gastly: { evolvesTo: 'haunter', xpToEvolve: 50 },
  haunter: { evolvesTo: 'gengar', xpToEvolve: 50 },
  gengar: { xpToEvolve: 0 }, // Final evolution

  // Onix line
  onix: { evolvesTo: 'steelix', xpToEvolve: 50 },
  steelix: { xpToEvolve: 0 }, // Final evolution

  // Drowzee line
  drowzee: { evolvesTo: 'hypno', xpToEvolve: 50 },
  hypno: { xpToEvolve: 0 }, // Final evolution

  // Krabby line
  krabby: { evolvesTo: 'kingler', xpToEvolve: 50 },
  kingler: { xpToEvolve: 0 }, // Final evolution

  // Voltorb line
  voltorb: { evolvesTo: 'electrode', xpToEvolve: 50 },
  electrode: { xpToEvolve: 0 }, // Final evolution

  // Exeggcute line
  exeggcute: { evolvesTo: 'exeggutor', xpToEvolve: 50 },
  exeggutor: { xpToEvolve: 0 }, // Final evolution

  // Cubone line
  cubone: { evolvesTo: 'marowak', xpToEvolve: 50 },
  marowak: { xpToEvolve: 0 }, // Final evolution

  // Tyrogue line
  tyrogue: { evolvesTo: 'hitmonlee', xpToEvolve: 50 },
  hitmonlee: { xpToEvolve: 0 }, // Final evolution
  hitmonchan: { xpToEvolve: 0 }, // Final evolution
  hitmontop: { xpToEvolve: 0 }, // Final evolution

  // Lickitung line
  lickitung: { evolvesTo: 'lickilicky', xpToEvolve: 50 },
  lickilicky: { xpToEvolve: 0 }, // Final evolution

  // Koffing line
  koffing: { evolvesTo: 'weezing', xpToEvolve: 50 },
  weezing: { xpToEvolve: 0 }, // Final evolution

  // Rhyhorn line
  rhyhorn: { evolvesTo: 'rhydon', xpToEvolve: 50 },
  rhydon: { evolvesTo: 'rhyperior', xpToEvolve: 50 },
  rhyperior: { xpToEvolve: 0 }, // Final evolution

  // Chansey line
  happiny: { evolvesTo: 'chansey', xpToEvolve: 50 },
  chansey: { evolvesTo: 'blissey', xpToEvolve: 50 },
  blissey: { xpToEvolve: 0 }, // Final evolution

  // Tangela line
  tangela: { evolvesTo: 'tangrowth', xpToEvolve: 50 },
  tangrowth: { xpToEvolve: 0 }, // Final evolution

  // Kangaskhan line
  kangaskhan: { xpToEvolve: 0 }, // No evolution

  // Horsea line
  horsea: { evolvesTo: 'seadra', xpToEvolve: 50 },
  seadra: { evolvesTo: 'kingdra', xpToEvolve: 50 },
  kingdra: { xpToEvolve: 0 }, // Final evolution

  // Goldeen line
  goldeen: { evolvesTo: 'seaking', xpToEvolve: 50 },
  seaking: { xpToEvolve: 0 }, // Final evolution

  // Staryu line
  staryu: { evolvesTo: 'starmie', xpToEvolve: 50 },
  starmie: { xpToEvolve: 0 }, // Final evolution

  // Mr. Mime line
  mime_jr: { evolvesTo: 'mr_mime', xpToEvolve: 50 },
  mr_mime: { xpToEvolve: 0 }, // Final evolution

  // Scyther line
  scyther: { evolvesTo: 'scizor', xpToEvolve: 50 },
  scizor: { xpToEvolve: 0 }, // Final evolution

  // Jynx line
  smoochum: { evolvesTo: 'jynx', xpToEvolve: 50 },
  jynx: { xpToEvolve: 0 }, // Final evolution

  // Electabuzz line
  elekid: { evolvesTo: 'electabuzz', xpToEvolve: 50 },
  electabuzz: { evolvesTo: 'electivire', xpToEvolve: 50 },
  electivire: { xpToEvolve: 0 }, // Final evolution

  // Magmar line
  magby: { evolvesTo: 'magmar', xpToEvolve: 50 },
  magmar: { evolvesTo: 'magmortar', xpToEvolve: 50 },
  magmortar: { xpToEvolve: 0 }, // Final evolution

  // Pinsir line
  pinsir: { xpToEvolve: 0 }, // No evolution

  // Tauros line
  tauros: { xpToEvolve: 0 }, // No evolution

  // Magikarp line
  magikarp: { evolvesTo: 'gyarados', xpToEvolve: 50 },
  gyarados: { xpToEvolve: 0 }, // Final evolution

  // Lapras line
  lapras: { xpToEvolve: 0 }, // No evolution

  // Ditto line
  ditto: { xpToEvolve: 0 }, // No evolution

  // Eevee line
  eevee: { evolvesTo: 'vaporeon', xpToEvolve: 50 }, // Default to Vaporeon
  vaporeon: { xpToEvolve: 0 }, // Final evolution
  jolteon: { xpToEvolve: 0 }, // Final evolution
  flareon: { xpToEvolve: 0 }, // Final evolution
  espeon: { xpToEvolve: 0 }, // Final evolution
  umbreon: { xpToEvolve: 0 }, // Final evolution
  leafeon: { xpToEvolve: 0 }, // Final evolution
  glaceon: { xpToEvolve: 0 }, // Final evolution
  sylveon: { xpToEvolve: 0 }, // Final evolution

  // Porygon line
  porygon: { evolvesTo: 'porygon2', xpToEvolve: 50 },
  porygon2: { evolvesTo: 'porygon_z', xpToEvolve: 50 },
  porygon_z: { xpToEvolve: 0 }, // Final evolution

  // Omanyte line
  omanyte: { evolvesTo: 'omastar', xpToEvolve: 50 },
  omastar: { xpToEvolve: 0 }, // Final evolution

  // Kabuto line
  kabuto: { evolvesTo: 'kabutops', xpToEvolve: 50 },
  kabutops: { xpToEvolve: 0 }, // Final evolution

  // Aerodactyl line
  aerodactyl: { xpToEvolve: 0 }, // No evolution

  // Snorlax line
  munchlax: { evolvesTo: 'snorlax', xpToEvolve: 50 },
  snorlax: { xpToEvolve: 0 }, // Final evolution

  // Articuno line
  articuno: { xpToEvolve: 0 }, // Legendary, no evolution

  // Zapdos line
  zapdos: { xpToEvolve: 0 }, // Legendary, no evolution

  // Moltres line
  moltres: { xpToEvolve: 0 }, // Legendary, no evolution

  // Dratini line
  dratini: { evolvesTo: 'dragonair', xpToEvolve: 50 },
  dragonair: { evolvesTo: 'dragonite', xpToEvolve: 250 },
  dragonite: { xpToEvolve: 0 }, // Final evolution

  // Mewtwo line
  mewtwo: { xpToEvolve: 0 }, // Legendary, no evolution

  // Mew line
  mew: { xpToEvolve: 0 }, // Legendary, no evolution

  // Generation 2
  // Chikorita line
  chikorita: { evolvesTo: 'bayleef', xpToEvolve: 50 },
  bayleef: { evolvesTo: 'meganium', xpToEvolve: 50 },
  meganium: { xpToEvolve: 0 }, // Final evolution

  // Cyndaquil line
  cyndaquil: { evolvesTo: 'quilava', xpToEvolve: 50 },
  quilava: { evolvesTo: 'typhlosion', xpToEvolve: 50 },
  typhlosion: { xpToEvolve: 0 }, // Final evolution

  // Totodile line
  totodile: { evolvesTo: 'croconaw', xpToEvolve: 50 },
  croconaw: { evolvesTo: 'feraligatr', xpToEvolve: 50 },
  feraligatr: { xpToEvolve: 0 }, // Final evolution

  // Sentret line
  sentret: { evolvesTo: 'furret', xpToEvolve: 50 },
  furret: { xpToEvolve: 0 }, // Final evolution

  // Hoothoot line
  hoothoot: { evolvesTo: 'noctowl', xpToEvolve: 50 },
  noctowl: { xpToEvolve: 0 }, // Final evolution

  // Ledyba line
  ledyba: { evolvesTo: 'ledian', xpToEvolve: 50 },
  ledian: { xpToEvolve: 0 }, // Final evolution

  // Spinarak line
  spinarak: { evolvesTo: 'ariados', xpToEvolve: 50 },
  ariados: { xpToEvolve: 0 }, // Final evolution

  // Chinchou line
  chinchou: { evolvesTo: 'lanturn', xpToEvolve: 50 },
  lanturn: { xpToEvolve: 0 }, // Final evolution

  // Togepi line
  togepi: { evolvesTo: 'togetic', xpToEvolve: 50 },
  togetic: { evolvesTo: 'togekiss', xpToEvolve: 50 },
  togekiss: { xpToEvolve: 0 }, // Final evolution

  // Natu line
  natu: { evolvesTo: 'xatu', xpToEvolve: 50 },
  xatu: { xpToEvolve: 0 }, // Final evolution

  // Mareep line
  mareep: { evolvesTo: 'flaaffy', xpToEvolve: 50 },
  flaaffy: { evolvesTo: 'ampharos', xpToEvolve: 50 },
  ampharos: { xpToEvolve: 0 }, // Final evolution

  // Azurill line
  azurill: { evolvesTo: 'marill', xpToEvolve: 50 },
  marill: { evolvesTo: 'azumarill', xpToEvolve: 50 },
  azumarill: { xpToEvolve: 0 }, // Final evolution

  // Sudowoodo line
  bonsly: { evolvesTo: 'sudowoodo', xpToEvolve: 50 },
  sudowoodo: { xpToEvolve: 0 }, // Final evolution

  // Hoppip line
  hoppip: { evolvesTo: 'skiploom', xpToEvolve: 50 },
  skiploom: { evolvesTo: 'jumpluff', xpToEvolve: 50 },
  jumpluff: { xpToEvolve: 0 }, // Final evolution

  // Aipom line
  aipom: { evolvesTo: 'ambipom', xpToEvolve: 50 },
  ambipom: { xpToEvolve: 0 }, // Final evolution

  // Sunkern line
  sunkern: { evolvesTo: 'sunflora', xpToEvolve: 50 },
  sunflora: { xpToEvolve: 0 }, // Final evolution

  // Yanma line
  yanma: { evolvesTo: 'yanmega', xpToEvolve: 50 },
  yanmega: { xpToEvolve: 0 }, // Final evolution

  // Wooper line
  wooper: { evolvesTo: 'quagsire', xpToEvolve: 50 },
  quagsire: { xpToEvolve: 0 }, // Final evolution

  // Murkrow line
  murkrow: { evolvesTo: 'honchkrow', xpToEvolve: 50 },
  honchkrow: { xpToEvolve: 0 }, // Final evolution

  // Misdreavus line
  misdreavus: { evolvesTo: 'mismagius', xpToEvolve: 50 },
  mismagius: { xpToEvolve: 0 }, // Final evolution

  // Unown line
  unown: { xpToEvolve: 0 }, // No evolution

  // Wynaut line
  wynaut: { evolvesTo: 'wobbuffet', xpToEvolve: 50 },
  wobbuffet: { xpToEvolve: 0 }, // Final evolution

  // Girafarig line
  girafarig: { xpToEvolve: 0 }, // No evolution

  // Pineco line
  pineco: { evolvesTo: 'forretress', xpToEvolve: 50 },
  forretress: { xpToEvolve: 0 }, // Final evolution

  // Dunsparce line
  dunsparce: { xpToEvolve: 0 }, // No evolution

  // Gligar line
  gligar: { evolvesTo: 'gliscor', xpToEvolve: 50 },
  gliscor: { xpToEvolve: 0 }, // Final evolution

  // Snubbull line
  snubbull: { evolvesTo: 'granbull', xpToEvolve: 50 },
  granbull: { xpToEvolve: 0 }, // Final evolution

  // Qwilfish line
  qwilfish: { xpToEvolve: 0 }, // No evolution

  // Shuckle line
  shuckle: { xpToEvolve: 0 }, // No evolution

  // Heracross line
  heracross: { xpToEvolve: 0 }, // No evolution

  // Sneasel line
  sneasel: { evolvesTo: 'weavile', xpToEvolve: 50 },
  weavile: { xpToEvolve: 0 }, // Final evolution

  // Teddiursa line
  teddiursa: { evolvesTo: 'ursaring', xpToEvolve: 50 },
  ursaring: { xpToEvolve: 0 }, // Final evolution

  // Slugma line
  slugma: { evolvesTo: 'magcargo', xpToEvolve: 50 },
  magcargo: { xpToEvolve: 0 }, // Final evolution

  // Swinub line
  swinub: { evolvesTo: 'piloswine', xpToEvolve: 50 },
  piloswine: { evolvesTo: 'mamoswine', xpToEvolve: 50 },
  mamoswine: { xpToEvolve: 0 }, // Final evolution

  // Corsola line
  corsola: { xpToEvolve: 0 }, // No evolution

  // Remoraid line
  remoraid: { evolvesTo: 'octillery', xpToEvolve: 50 },
  octillery: { xpToEvolve: 0 }, // Final evolution

  // Delibird line
  delibird: { xpToEvolve: 0 }, // No evolution

  // Mantyke line
  mantyke: { evolvesTo: 'mantine', xpToEvolve: 50 },
  mantine: { xpToEvolve: 0 }, // Final evolution

  // Skarmory line
  skarmory: { xpToEvolve: 0 }, // No evolution

  // Houndour line
  houndour: { evolvesTo: 'houndoom', xpToEvolve: 50 },
  houndoom: { xpToEvolve: 0 }, // Final evolution

  // Phanpy line
  phanpy: { evolvesTo: 'donphan', xpToEvolve: 50 },
  donphan: { xpToEvolve: 0 }, // Final evolution

  // Stantler line
  stantler: { xpToEvolve: 0 }, // No evolution

  // Smeargle line
  smeargle: { xpToEvolve: 0 }, // No evolution

  // Miltank line
  miltank: { xpToEvolve: 0 }, // No evolution

  // Raikou line
  raikou: { xpToEvolve: 0 }, // Legendary, no evolution

  // Entei line
  entei: { xpToEvolve: 0 }, // Legendary, no evolution

  // Suicune line
  suicune: { xpToEvolve: 0 }, // Legendary, no evolution

  // Larvitar line
  larvitar: { evolvesTo: 'pupitar', xpToEvolve: 50 },
  pupitar: { evolvesTo: 'tyranitar', xpToEvolve: 250 },
  tyranitar: { xpToEvolve: 0 }, // Final evolution

  // Lugia line
  lugia: { xpToEvolve: 0 }, // Legendary, no evolution

  // Ho-Oh line
  ho_oh: { xpToEvolve: 0 }, // Legendary, no evolution

  // Celebi line
  celebi: { xpToEvolve: 0 }, // Legendary, no evolution

  // Generation 3
  // Treecko line
  treecko: { evolvesTo: 'grovyle', xpToEvolve: 50 },
  grovyle: { evolvesTo: 'sceptile', xpToEvolve: 50 },
  sceptile: { xpToEvolve: 0 }, // Final evolution

  // Torchic line
  torchic: { evolvesTo: 'combusken', xpToEvolve: 50 },
  combusken: { evolvesTo: 'blaziken', xpToEvolve: 50 },
  blaziken: { xpToEvolve: 0 }, // Final evolution

  // Mudkip line
  mudkip: { evolvesTo: 'marshtomp', xpToEvolve: 50 },
  marshtomp: { evolvesTo: 'swampert', xpToEvolve: 50 },
  swampert: { xpToEvolve: 0 }, // Final evolution

  // Poochyena line
  poochyena: { evolvesTo: 'mightyena', xpToEvolve: 50 },
  mightyena: { xpToEvolve: 0 }, // Final evolution

  // Zigzagoon line
  zigzagoon: { evolvesTo: 'linoone', xpToEvolve: 50 },
  linoone: { xpToEvolve: 0 }, // Final evolution

  // Wurmple line (can evolve to Silcoon or Cascoon - default to Silcoon)
  wurmple: { evolvesTo: 'silcoon', xpToEvolve: 50 },
  silcoon: { evolvesTo: 'beautifly', xpToEvolve: 50 },
  beautifly: { xpToEvolve: 0 }, // Final evolution
  cascoon: { evolvesTo: 'dustox', xpToEvolve: 50 },
  dustox: { xpToEvolve: 0 }, // Final evolution

  // Lotad line
  lotad: { evolvesTo: 'lombre', xpToEvolve: 50 },
  lombre: { evolvesTo: 'ludicolo', xpToEvolve: 50 },
  ludicolo: { xpToEvolve: 0 }, // Final evolution

  // Seedot line
  seedot: { evolvesTo: 'nuzleaf', xpToEvolve: 50 },
  nuzleaf: { evolvesTo: 'shiftry', xpToEvolve: 50 },
  shiftry: { xpToEvolve: 0 }, // Final evolution

  // Taillow line
  taillow: { evolvesTo: 'swellow', xpToEvolve: 50 },
  swellow: { xpToEvolve: 0 }, // Final evolution

  // Wingull line
  wingull: { evolvesTo: 'pelipper', xpToEvolve: 50 },
  pelipper: { xpToEvolve: 0 }, // Final evolution

  // Ralts line
  ralts: { evolvesTo: 'kirlia', xpToEvolve: 50 },
  kirlia: { evolvesTo: 'gardevoir', xpToEvolve: 50 },
  gardevoir: { xpToEvolve: 0 }, // Final evolution
  gallade: { xpToEvolve: 0 }, // Final evolution (alternate from Kirlia)

  // Surskit line
  surskit: { evolvesTo: 'masquerain', xpToEvolve: 50 },
  masquerain: { xpToEvolve: 0 }, // Final evolution

  // Shroomish line
  shroomish: { evolvesTo: 'breloom', xpToEvolve: 50 },
  breloom: { xpToEvolve: 0 }, // Final evolution

  // Slakoth line
  slakoth: { evolvesTo: 'vigoroth', xpToEvolve: 50 },
  vigoroth: { evolvesTo: 'slaking', xpToEvolve: 50 },
  slaking: { xpToEvolve: 0 }, // Final evolution

  // Nincada line
  nincada: { evolvesTo: 'ninjask', xpToEvolve: 50 },
  ninjask: { xpToEvolve: 0 }, // Final evolution
  shedinja: { xpToEvolve: 0 }, // Special evolution

  // Whismur line
  whismur: { evolvesTo: 'loudred', xpToEvolve: 50 },
  loudred: { evolvesTo: 'exploud', xpToEvolve: 50 },
  exploud: { xpToEvolve: 0 }, // Final evolution

  // Makuhita line
  makuhita: { evolvesTo: 'hariyama', xpToEvolve: 50 },
  hariyama: { xpToEvolve: 0 }, // Final evolution

  // Azurill line (already defined above with Marill)
  // Nosepass line
  nosepass: { evolvesTo: 'probopass', xpToEvolve: 50 },
  probopass: { xpToEvolve: 0 }, // Final evolution

  // Skitty line
  skitty: { evolvesTo: 'delcatty', xpToEvolve: 50 },
  delcatty: { xpToEvolve: 0 }, // Final evolution

  // Sableye line
  sableye: { xpToEvolve: 0 }, // No evolution

  // Mawile line
  mawile: { xpToEvolve: 0 }, // No evolution

  // Aron line
  aron: { evolvesTo: 'lairon', xpToEvolve: 50 },
  lairon: { evolvesTo: 'aggron', xpToEvolve: 50 },
  aggron: { xpToEvolve: 0 }, // Final evolution

  // Meditite line
  meditite: { evolvesTo: 'medicham', xpToEvolve: 50 },
  medicham: { xpToEvolve: 0 }, // Final evolution

  // Electrike line
  electrike: { evolvesTo: 'manectric', xpToEvolve: 50 },
  manectric: { xpToEvolve: 0 }, // Final evolution

  // Plusle line
  plusle: { xpToEvolve: 0 }, // No evolution

  // Minun line
  minun: { xpToEvolve: 0 }, // No evolution

  // Volbeat line
  volbeat: { xpToEvolve: 0 }, // No evolution

  // Illumise line
  illumise: { xpToEvolve: 0 }, // No evolution

  // Roselia line
  budew: { evolvesTo: 'roselia', xpToEvolve: 50 },
  roselia: { evolvesTo: 'roserade', xpToEvolve: 50 },
  roserade: { xpToEvolve: 0 }, // Final evolution

  // Gulpin line
  gulpin: { evolvesTo: 'swalot', xpToEvolve: 50 },
  swalot: { xpToEvolve: 0 }, // Final evolution

  // Carvanha line
  carvanha: { evolvesTo: 'sharpedo', xpToEvolve: 50 },
  sharpedo: { xpToEvolve: 0 }, // Final evolution

  // Wailmer line
  wailmer: { evolvesTo: 'wailord', xpToEvolve: 50 },
  wailord: { xpToEvolve: 0 }, // Final evolution

  // Numel line
  numel: { evolvesTo: 'camerupt', xpToEvolve: 50 },
  camerupt: { xpToEvolve: 0 }, // Final evolution

  // Torkoal line
  torkoal: { xpToEvolve: 0 }, // No evolution

  // Spoink line
  spoink: { evolvesTo: 'grumpig', xpToEvolve: 50 },
  grumpig: { xpToEvolve: 0 }, // Final evolution

  // Spinda line
  spinda: { xpToEvolve: 0 }, // No evolution

  // Trapinch line
  trapinch: { evolvesTo: 'vibrava', xpToEvolve: 50 },
  vibrava: { evolvesTo: 'flygon', xpToEvolve: 50 },
  flygon: { xpToEvolve: 0 }, // Final evolution

  // Cacnea line
  cacnea: { evolvesTo: 'cacturne', xpToEvolve: 50 },
  cacturne: { xpToEvolve: 0 }, // Final evolution

  // Swablu line
  swablu: { evolvesTo: 'altaria', xpToEvolve: 50 },
  altaria: { xpToEvolve: 0 }, // Final evolution

  // Zangoose line
  zangoose: { xpToEvolve: 0 }, // No evolution

  // Seviper line
  seviper: { xpToEvolve: 0 }, // No evolution

  // Lunatone line
  lunatone: { xpToEvolve: 0 }, // No evolution

  // Solrock line
  solrock: { xpToEvolve: 0 }, // No evolution

  // Barboach line
  barboach: { evolvesTo: 'whiscash', xpToEvolve: 50 },
  whiscash: { xpToEvolve: 0 }, // Final evolution

  // Corphish line
  corphish: { evolvesTo: 'crawdaunt', xpToEvolve: 50 },
  crawdaunt: { xpToEvolve: 0 }, // Final evolution

  // Baltoy line
  baltoy: { evolvesTo: 'claydol', xpToEvolve: 50 },
  claydol: { xpToEvolve: 0 }, // Final evolution

  // Lileep line
  lileep: { evolvesTo: 'cradily', xpToEvolve: 50 },
  cradily: { xpToEvolve: 0 }, // Final evolution

  // Anorith line
  anorith: { evolvesTo: 'armaldo', xpToEvolve: 50 },
  armaldo: { xpToEvolve: 0 }, // Final evolution

  // Feebas line
  feebas: { evolvesTo: 'milotic', xpToEvolve: 50 },
  milotic: { xpToEvolve: 0 }, // Final evolution

  // Castform line
  castform: { xpToEvolve: 0 }, // No evolution

  // Kecleon line
  kecleon: { xpToEvolve: 0 }, // No evolution

  // Shuppet line
  shuppet: { evolvesTo: 'banette', xpToEvolve: 50 },
  banette: { xpToEvolve: 0 }, // Final evolution

  // Duskull line
  duskull: { evolvesTo: 'dusclops', xpToEvolve: 50 },
  dusclops: { evolvesTo: 'dusknoir', xpToEvolve: 50 },
  dusknoir: { xpToEvolve: 0 }, // Final evolution

  // Tropius line
  tropius: { xpToEvolve: 0 }, // No evolution

  // Chimecho line
  chingling: { evolvesTo: 'chimecho', xpToEvolve: 50 },
  chimecho: { xpToEvolve: 0 }, // Final evolution

  // Absol line
  absol: { xpToEvolve: 0 }, // No evolution

  // Snorunt line
  snorunt: { evolvesTo: 'glalie', xpToEvolve: 50 },
  glalie: { xpToEvolve: 0 }, // Final evolution
  froslass: { xpToEvolve: 0 }, // Alternate evolution

  // Spheal line
  spheal: { evolvesTo: 'sealeo', xpToEvolve: 50 },
  sealeo: { evolvesTo: 'walrein', xpToEvolve: 50 },
  walrein: { xpToEvolve: 0 }, // Final evolution

  // Clamperl line
  clamperl: { evolvesTo: 'huntail', xpToEvolve: 50 }, // Default to Huntail
  huntail: { xpToEvolve: 0 }, // Final evolution
  gorebyss: { xpToEvolve: 0 }, // Alternate evolution

  // Relicanth line
  relicanth: { xpToEvolve: 0 }, // No evolution

  // Luvdisc line
  luvdisc: { xpToEvolve: 0 }, // No evolution

  // Bagon line
  bagon: { evolvesTo: 'shelgon', xpToEvolve: 50 },
  shelgon: { evolvesTo: 'salamence', xpToEvolve: 250 },
  salamence: { xpToEvolve: 0 }, // Final evolution

  // Beldum line
  beldum: { evolvesTo: 'metang', xpToEvolve: 50 },
  metang: { evolvesTo: 'metagross', xpToEvolve: 50 },
  metagross: { xpToEvolve: 0 }, // Final evolution

  // Regirock line
  regirock: { xpToEvolve: 0 }, // Legendary, no evolution

  // Regice line
  regice: { xpToEvolve: 0 }, // Legendary, no evolution

  // Registeel line
  registeel: { xpToEvolve: 0 }, // Legendary, no evolution

  // Latias line
  latias: { xpToEvolve: 0 }, // Legendary, no evolution

  // Latios line
  latios: { xpToEvolve: 0 }, // Legendary, no evolution

  // Kyogre line
  kyogre: { xpToEvolve: 0 }, // Legendary, no evolution

  // Groudon line
  groudon: { xpToEvolve: 0 }, // Legendary, no evolution

  // Rayquaza line
  rayquaza: { xpToEvolve: 0 }, // Legendary, no evolution

  // Jirachi line
  jirachi: { xpToEvolve: 0 }, // Legendary, no evolution

  // Deoxys line
  deoxys: { xpToEvolve: 0 }, // Legendary, no evolution

  // Generation 4
  // Turtwig line
  turtwig: { evolvesTo: 'grotle', xpToEvolve: 50 },
  grotle: { evolvesTo: 'torterra', xpToEvolve: 50 },
  torterra: { xpToEvolve: 0 }, // Final evolution

  // Chimchar line
  chimchar: { evolvesTo: 'monferno', xpToEvolve: 50 },
  monferno: { evolvesTo: 'infernape', xpToEvolve: 50 },
  infernape: { xpToEvolve: 0 }, // Final evolution

  // Piplup line
  piplup: { evolvesTo: 'prinplup', xpToEvolve: 50 },
  prinplup: { evolvesTo: 'empoleon', xpToEvolve: 50 },
  empoleon: { xpToEvolve: 0 }, // Final evolution

  // Starly line
  starly: { evolvesTo: 'staravia', xpToEvolve: 50 },
  staravia: { evolvesTo: 'staraptor', xpToEvolve: 50 },
  staraptor: { xpToEvolve: 0 }, // Final evolution

  // Bidoof line
  bidoof: { evolvesTo: 'bibarel', xpToEvolve: 50 },
  bibarel: { xpToEvolve: 0 }, // Final evolution

  // Kricketot line
  kricketot: { evolvesTo: 'kricketune', xpToEvolve: 50 },
  kricketune: { xpToEvolve: 0 }, // Final evolution

  // Shinx line
  shinx: { evolvesTo: 'luxio', xpToEvolve: 50 },
  luxio: { evolvesTo: 'luxray', xpToEvolve: 50 },
  luxray: { xpToEvolve: 0 }, // Final evolution

  // Cranidos line
  cranidos: { evolvesTo: 'rampardos', xpToEvolve: 50 },
  rampardos: { xpToEvolve: 0 }, // Final evolution

  // Shieldon line
  shieldon: { evolvesTo: 'bastiodon', xpToEvolve: 50 },
  bastiodon: { xpToEvolve: 0 }, // Final evolution

  // Burmy line
  burmy: { evolvesTo: 'mothim', xpToEvolve: 50 },
  mothim: { xpToEvolve: 0 }, // Final evolution
  wormadam: { xpToEvolve: 0 }, // Alternate evolution

  // Combee line
  combee: { evolvesTo: 'vespiquen', xpToEvolve: 50 },
  vespiquen: { xpToEvolve: 0 }, // Final evolution

  // Pachirisu line
  pachirisu: { xpToEvolve: 0 }, // No evolution

  // Buizel line
  buizel: { evolvesTo: 'floatzel', xpToEvolve: 50 },
  floatzel: { xpToEvolve: 0 }, // Final evolution

  // Cherubi line
  cherubi: { evolvesTo: 'cherrim', xpToEvolve: 50 },
  cherrim: { xpToEvolve: 0 }, // Final evolution

  // Shellos line
  shellos: { evolvesTo: 'gastrodon', xpToEvolve: 50 },
  gastrodon: { xpToEvolve: 0 }, // Final evolution

  // Drifloon line
  drifloon: { evolvesTo: 'drifblim', xpToEvolve: 50 },
  drifblim: { xpToEvolve: 0 }, // Final evolution

  // Buneary line
  buneary: { evolvesTo: 'lopunny', xpToEvolve: 50 },
  lopunny: { xpToEvolve: 0 }, // Final evolution

  // Glameow line
  glameow: { evolvesTo: 'purugly', xpToEvolve: 50 },
  purugly: { xpToEvolve: 0 }, // Final evolution

  // Stunky line
  stunky: { evolvesTo: 'skuntank', xpToEvolve: 50 },
  skuntank: { xpToEvolve: 0 }, // Final evolution

  // Bronzor line
  bronzor: { evolvesTo: 'bronzong', xpToEvolve: 50 },
  bronzong: { xpToEvolve: 0 }, // Final evolution

  // Chatot line
  chatot: { xpToEvolve: 0 }, // No evolution

  // Spiritomb line
  spiritomb: { xpToEvolve: 0 }, // No evolution

  // Gible line
  gible: { evolvesTo: 'gabite', xpToEvolve: 50 },
  gabite: { evolvesTo: 'garchomp', xpToEvolve: 250 },
  garchomp: { xpToEvolve: 0 }, // Final evolution

  // Riolu line
  riolu: { evolvesTo: 'lucario', xpToEvolve: 50 },
  lucario: { xpToEvolve: 0 }, // Final evolution

  // Hippopotas line
  hippopotas: { evolvesTo: 'hippowdon', xpToEvolve: 50 },
  hippowdon: { xpToEvolve: 0 }, // Final evolution

  // Skorupi line
  skorupi: { evolvesTo: 'drapion', xpToEvolve: 50 },
  drapion: { xpToEvolve: 0 }, // Final evolution

  // Croagunk line
  croagunk: { evolvesTo: 'toxicroak', xpToEvolve: 50 },
  toxicroak: { xpToEvolve: 0 }, // Final evolution

  // Carnivine line
  carnivine: { xpToEvolve: 0 }, // No evolution

  // Finneon line
  finneon: { evolvesTo: 'lumineon', xpToEvolve: 50 },
  lumineon: { xpToEvolve: 0 }, // Final evolution

  // Snover line
  snover: { evolvesTo: 'abomasnow', xpToEvolve: 50 },
  abomasnow: { xpToEvolve: 0 }, // Final evolution

  // Rotom line
  rotom: { xpToEvolve: 0 }, // No evolution

  // Uxie line
  uxie: { xpToEvolve: 0 }, // Legendary, no evolution

  // Mesprit line
  mesprit: { xpToEvolve: 0 }, // Legendary, no evolution

  // Azelf line
  azelf: { xpToEvolve: 0 }, // Legendary, no evolution

  // Dialga line
  dialga: { xpToEvolve: 0 }, // Legendary, no evolution

  // Palkia line
  palkia: { xpToEvolve: 0 }, // Legendary, no evolution

  // Heatran line
  heatran: { xpToEvolve: 0 }, // Legendary, no evolution

  // Regigigas line
  regigigas: { xpToEvolve: 0 }, // Legendary, no evolution

  // Giratina line
  giratina: { xpToEvolve: 0 }, // Legendary, no evolution

  // Cresselia line
  cresselia: { xpToEvolve: 0 }, // Legendary, no evolution

  // Phione line
  phione: { xpToEvolve: 0 }, // No evolution

  // Manaphy line
  manaphy: { xpToEvolve: 0 }, // Legendary, no evolution

  // Darkrai line
  darkrai: { xpToEvolve: 0 }, // Legendary, no evolution

  // Shaymin line
  shaymin: { xpToEvolve: 0 }, // Legendary, no evolution

  // Arceus line
  arceus: { xpToEvolve: 0 }, // Legendary, no evolution
};

/**
 * Get evolution data for a Pokemon type
 */
export function getEvolutionData(
  pokemonType: PokemonType,
): EvolutionData | undefined {
  return EVOLUTION_DATA[pokemonType];
}

/**
 * Check if a Pokemon can evolve
 */
export function canEvolve(pokemonType: PokemonType): boolean {
  const data = EVOLUTION_DATA[pokemonType];
  return data !== undefined && data.evolvesTo !== undefined;
}

/**
 * Get the evolution target for a Pokemon
 */
export function getEvolutionTarget(
  pokemonType: PokemonType,
): PokemonType | undefined {
  return EVOLUTION_DATA[pokemonType]?.evolvesTo;
}

/**
 * Get XP required for evolution
 */
export function getXpToEvolve(pokemonType: PokemonType): number {
  return EVOLUTION_DATA[pokemonType]?.xpToEvolve ?? 0;
}
