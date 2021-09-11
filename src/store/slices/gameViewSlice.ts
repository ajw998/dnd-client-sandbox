import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type GameView = 'party' | 'global';

export const gameViewDetailSidebarSlice = createSlice({
  name: 'gameViewDetaiSidebar',
  initialState: {
    mainView: 'party' as GameView,
    detailsView: 'game-state',
  },
  reducers: {
    setMainView: (state, action: PayloadAction<GameView>) => {
      state.mainView = action.payload;
    },
    setDetailView: (state, action: PayloadAction<string>) => {
      state.detailsView = action.payload;
    },
  },
});

export const { setMainView } = gameViewDetailSidebarSlice.actions;

export default gameViewDetailSidebarSlice.reducer;
