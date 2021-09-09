import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    isEditing: false,
  },
  reducers: {
    toggleEditMode: (state) => {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { toggleEditMode } = editorSlice.actions;

export default editorSlice.reducer;
