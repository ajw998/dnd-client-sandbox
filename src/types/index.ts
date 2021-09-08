export type CharacterState<T> = T;

export interface CharacterMeta {
  class: DND5eClass;
  name: string;
}

export interface DND5ePlayerAbility {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

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

export interface DND5eCharacterState {
  armor: number;
  gold: number;
  hitDice: string;
  hp: number;
  initiative: number;
  level: number;
  maxHp: number;
  speed: number;
  xp: number;
}

export type DND5EPlayerAbilityAbbreviation = {
  [P in keyof DND5ePlayerAbility]: string;
};

export type PlayerAbility<T> = {
  [P in keyof T]: number;
};

export interface CharacterStats<T, U> {
  meta: CharacterMeta;
  ability: PlayerAbility<T>;
  state: CharacterState<U>;
}

// Application-defined character roles
export type CharacterRole =
  | 'player'
  | 'companion'
  | 'ally'
  | 'enemy'
  | 'unknown';
