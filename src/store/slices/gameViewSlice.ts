import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type GameView = 'party' | 'global';

export const gameViewDetailSidebarSlice = createSlice({
  name: 'gameViewDetaiSidebar',
  initialState: {
    mainView: 'party' as GameView,
    detailsViewCharacter: '',
  },
  reducers: {
    setMainView: (state, action: PayloadAction<GameView>) => {
      state.mainView = action.payload;
    },
    setDetailsViewCharacter: (state, action: PayloadAction<string>) => {
      state.detailsViewCharacter = action.payload;
    },
  },
});

export const { setMainView, setDetailsViewCharacter } =
  gameViewDetailSidebarSlice.actions;

export default gameViewDetailSidebarSlice.reducer;
