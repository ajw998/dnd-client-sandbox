import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CalculatorView = 'atk-roll' | 'dmg-roll';

export const calculatorViewSlice = createSlice({
  name: 'calculatorView',
  initialState: {
    currentView: 'atk-roll'
  },
  reducers: {
    setCalculatorView: (state, action: PayloadAction<CalculatorView>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setCalculatorView } = calculatorViewSlice.actions;

export default calculatorViewSlice.reducer;
