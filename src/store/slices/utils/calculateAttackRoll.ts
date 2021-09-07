import type { AttackRollCalculatorInitialState } from '../attackRollCalculatorSlice';

type AttackRollInput = Pick<
  AttackRollCalculatorInitialState,
  'd20Value' | 'proficiencyBonus' | 'modifier'
>;

type AttackRollResult = number;

export const calculatePlayerRoll = ({
  d20Value = 0,
  proficiencyBonus = 0,
  modifier = 0,
}: AttackRollInput): AttackRollResult => {
  if (Number(d20Value) === 1) return 1;
  return Number(d20Value) + Number(proficiencyBonus) + Number(modifier);
};

export const isSuccessfulAttack = (
  targetArmor: number | undefined,
  playerRoll: number,
) => (targetArmor ? playerRoll > targetArmor : true);
