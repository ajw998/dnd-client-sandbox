export type CharacterState<T> = T;

export interface DND5ePlayerAbility {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

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
  ability: PlayerAbility<T>;
  state: CharacterState<U>;
}
