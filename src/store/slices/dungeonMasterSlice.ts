import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  CharacterStats,
  DND5eCharacterSkills,
  DND5eCharacterState,
  DND5eAbility,
} from 'src/types';

export type PartialCharacterStatPayload = Partial<
  CharacterStats<DND5eAbility, DND5eCharacterSkills, DND5eCharacterState>
>;

interface StagingDataPayload {
  id: string;
  data: PartialCharacterStatPayload;
}

export const dungeonMasterSlice = createSlice({
  name: 'editor',
  initialState: {
    isEditing: false,
    staging: {},
  },
  reducers: {
    toggleEditMode: (state): void => {
      state.isEditing = !state.isEditing;
    },
    setStaging: (state, action: PayloadAction<StagingDataPayload>): void => {
      const id = action.payload.id;
      state.staging[id] = action.payload.data;
    },
  },
});

export const { toggleEditMode, setStaging } = dungeonMasterSlice.actions;

export default dungeonMasterSlice.reducer;
