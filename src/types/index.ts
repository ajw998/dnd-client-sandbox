export type Feature<T> = T & { isFeatureEnabled: boolean };

export type CharacterState<T> = T;

export type Dices = 'd20' | 'd9' | 'd8' | 'd6' | 'd4';

// These are attributes that is likely to be left
// unchanged for a very long time
export interface CharacterMeta {
  class: DND5eClass;
  name: string;
}

export type DND5eCharacterAbility = {
  [P in DND5eAbility]: number;
};

export type DND5eAbility =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';

export type DND5eClass =
  | 'fighter'
  | 'barbarian'
  | 'bard'
  | 'cleric'
  | 'monk'
  | 'paladin'
  | 'rogue'
  | 'sorcerer'
  | 'warlock'
  | 'wizard';

export type DND5eCharacterSkills =
  | 'acrobatics'
  | 'animalHandling'
  | 'arcana'
  | 'athletics'
  | 'deception'
  | 'history'
  | 'insight'
  | 'intimidation'
  | 'investigation'
  | 'medicine'
  | 'nature'
  | 'perception'
  | 'performance'
  | 'persuasion'
  | 'religion'
  | 'sleightOfHand'
  | 'stealth'
  | 'survival';

export interface DND5eCharacterState {
  passiveWisdom: number;
  proficiencyBonus: number;
  armor: number;
  deathSaves: DeathSaves;
  gold: number;
  hitDice: string;
  hp: number;
  initiative: number;
  level: number;
  maxHp: number;
  speed: number;
  xp: number;
}

interface DeathSaves {
  successes: number;
  failures: number;
}

export type DisplayStringMap<T> = {
  [P in keyof T]: string;
};

export type DND5eCharacterAbilityAbbreviation = {
  [P in keyof DND5eCharacterAbility]: string;
};

export type CharacterAbility<T> = {
  [P in keyof T]: number;
};

export interface CharacterStats<A, T, S> {
  meta: CharacterMeta;
  ability: CharacterAbility<A>;
  skill: SkillSet<S, A>;
  state: CharacterState<T>;
}

export type SkillSet<T, U> = {
  [P in keyof T]: Skill<U>;
};

export interface Skill<T> {
  isProficient: boolean;
  value: number;
  modifier: T;
}

export type CharacterInformation = CharacterStats<
  DND5eCharacterAbility,
  DND5eCharacterState,
  DND5eCharacterSkills
>;

export type CharacterRole =
  | 'player'
  | 'companion'
  | 'ally'
  | 'enemy'
  | 'unknown';
