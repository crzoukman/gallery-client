import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IHeaderState } from './types';

const state: IHeaderState = {
  isMenuOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState: state,
  reducers: {
    setIsMenuOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isMenuOpen = payload;
    },
  },
});

export const { setIsMenuOpen } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
