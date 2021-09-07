import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type InputValue = number | undefined;

export type DamageRollCalculatorIntitialState = {
  rolls: Array<InputValue>;
  proficiencyBonus: InputValue;
  modifier: InputValue;
  totalDamage: number;
};

export const attackRollCalculatorSlice = createSlice({
  name: 'attackRollCalculator',
  initialState: {
    rolls: [0] as Array<InputValue>,
    proficiencyBonus: 0 as InputValue,
    modifier: 0 as InputValue,
    totalDamage: 0,
  } as DamageRollCalculatorIntitialState,
  reducers: {
    setModifier: (state, action: PayloadAction<InputValue>) => {
      state.modifier = action.payload;
    },
    addPlayerRolls: (state, action: PayloadAction<InputValue>) => {
      state.rolls = [...state.rolls, action.payload];
    },
    setProficiencyBonus: (state, action: PayloadAction<InputValue>) => {
      state.proficiencyBonus = action.payload;
    },
    calculateTotalDamage: (state) => {
      state.totalDamage = 0;
    },
  },
});

export const { addPlayerRolls, setModifier, setProficiencyBonus } =
  attackRollCalculatorSlice.actions;

export default attackRollCalculatorSlice.reducer;
