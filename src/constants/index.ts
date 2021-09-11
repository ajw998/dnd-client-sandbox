import type { DND5ePlayerAbilityAbbreviation } from '../types';
import type { NavData } from '../components/Navbar';
import {
  faUser,
  faDiceD20,
  faCalculator,
} from '@fortawesome/free-solid-svg-icons';

export const VERSION = '0.1';

export const NAVIGATION_ITEM: NavData & { isHome?: boolean } = {
  playerView: {
    path: '/',
    icon: faDiceD20,
    isHome: true,
  },
  calculator: {
    path: '/calculator',
    icon: faCalculator,
  },
  characterDetails: {
    path: '/details',
    icon: faUser,
  },
};

// The header that is shown to the user based on their application privilege
export const HEADERS = {
  player: 'Dungeon & Dragons',
  dm: 'Dungeon Master',
  admin: 'God',
};

export const SUBHEADER = {
  player: 'with blackjack and hookers',
  dm: 'All Hail the King',
  admin: 'Do No Harm',
};

// Do not sort any values in this file
// as the ordering of the keys are important
export const ABILITY_ABBREVIATION: DND5ePlayerAbilityAbbreviation = {
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
  player: '#e5ae38',
  companion: '#6d904f',
  ally: '#30a2da',
  enemy: '#fc4f30',
  unknown: '#8b8b8b',
};

export const CHARACTER_SKILL_TEXT = {
  animalHandling: 'Animal Handling',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'Sleight of Hand',
  stealth: 'Stealth',
  survival: 'Survival',
};

export const ATTACK_ROLL_DESCRIPTION = `When you make an attack, your attack roll determines whether the attack hits or misses. To make an attack roll, roll a d20 and add the appropriate modifiers. If the total of the roll plus modifiers equals or exceeds the target’s Armor Class (AC), the attack hits. Each character’s AC is shown on the character sheet, and each monster’s AC is in the monster’s stat block.`;
