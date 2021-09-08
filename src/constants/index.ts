import type { DND5EPlayerAbilityAbbreviation } from '../types';

// The header that is shown to the user based on their application privilege
export const HEADERS = {
  player: 'Dungeon & Dragons',
  dm: 'Dungeon Master',
  admin: 'God',
};

// Do not sort any values in this file
// as the ordering of the keys are important
export const ABILITY_ABBREVIATION: DND5EPlayerAbilityAbbreviation = {
  strength: 'STR',
  constitution: 'CON',
  charisma: 'CHA',
  dexterity: 'DEX',
  intelligence: 'INT',
  wisdom: 'WIS',
};

export const CHARACTER_ROLE = {
  player: 'PLAYER',
  companion: 'PARTY',
  ally: 'ALLY',
  enemy: 'ENEMY',
  unknown: 'UNKNOWN',
};

// Map character role to a theme colour
export const CHARACTER_ROLE_COLOUR = {
  player: '',
  companion: '#6d904f',
  ally: '#30a2da',
  enemy: '#fc4f30',
  unknown: '#8b8b8b',
};
