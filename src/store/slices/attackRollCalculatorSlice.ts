import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Modifier {
  modifier: string;
  value: number;
}

export const attackRollCalculatorSlice = createSlice({
  name: 'attackRollCalculator',
  initialState: {
    d20value: 0,
    targetArmor: 0,
    proficiencyBonus: 0,
    modifiers: [] as Array<Modifier>,
    finalValue: 0,
    isSuccess: false
  },
  reducers: {
    addModifier: (state, action: PayloadAction<Modifier>) => {
      state.modifiers.push(action.payload)
    },
    addD20RollValue: (state, action: PayloadAction<number>) => {
      state.d20value = action.payload;
    },
    setTargetArmor: (state, action: PayloadAction<number>) => {
      state.targetArmor = action.payload;
    },
    setProficiencyBonus: (state, action: PayloadAction<number>) => {
      state.proficiencyBonus = action.payload;
    },
    setSuccess: (state) => { state.isSuccess = true }
  }
})

export const { addD20RollValue, setProficiencyBonus, setTargetArmor } = attackRollCalculatorSlice.actions;

export default attackRollCalculatorSlice.reducer;
