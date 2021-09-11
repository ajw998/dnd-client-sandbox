import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  calculatePlayerRoll,
  isSuccessfulAttack,
} from './utils/calculateAttackRoll';

export type InputValue = number | undefined;

export type AttackRollCalculatorInitialState = {
  d20Value: InputValue;
  targetArmor: InputValue;
  proficiencyBonus: InputValue;
  modifier: InputValue;
  finalValue: number;
  isSuccess: boolean;
};

export const attackRollCalculatorSlice = createSlice({
  name: 'attackRollCalculator',
  initialState: {
    d20Value: 0 as InputValue,
    targetArmor: 0 as InputValue,
    proficiencyBonus: 0 as InputValue,
    modifier: 0 as InputValue,
    finalValue: 0,
    isSuccess: false,
  } as AttackRollCalculatorInitialState,
  reducers: {
    setModifier: (state, action: PayloadAction<InputValue>) => {
      state.modifier = action.payload;
    },
    setD20Value: (state, action: PayloadAction<InputValue>) => {
      state.d20Value = action.payload;
    },
    setTargetArmor: (state, action: PayloadAction<InputValue>) => {
      state.targetArmor = action.payload;
    },
    setProficiencyBonus: (state, action: PayloadAction<InputValue>) => {
      state.proficiencyBonus = action.payload;
    },
    calculateAttackRoll: (state) => {
      const playerRoll = calculatePlayerRoll(state);
      state.finalValue = playerRoll;
      // Automatically fail the user hit if the player rolls a 1 on d20;
      // Automatic success on natural 20;
      state.isSuccess = 
        state.d20Value === 1 ? false : 
        state.d20Value === 20 ? true :
      isSuccessfulAttack(state.targetArmor, playerRoll);
    },
  },
});

export const {
  setD20Value,
  setModifier,
  calculateAttackRoll,
  setProficiencyBonus,
  setTargetArmor,
} = attackRollCalculatorSlice.actions;

export default attackRollCalculatorSlice.reducer;
