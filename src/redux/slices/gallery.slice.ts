import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetCollection, IState } from './types';

const state: IState = {
  isLoadingGlobal: false,
  collection1: [],
  collection2: [],
  collection3: [],
  collection4: [],
  currentPage: 0,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: state,
  reducers: {
    setIsLoadingGlobal: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingGlobal = payload;
    },
    setCollection: (state, { payload }: PayloadAction<ISetCollection>) => {
      if (payload.collection === 1) {
        state.collection1 = payload.photos;
      }
      if (payload.collection === 2) {
        state.collection2 = payload.photos;
      }
      if (payload.collection === 3) {
        state.collection3 = payload.photos;
      }
      if (payload.collection === 4) {
        state.collection4 = payload.photos;
      }
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
});

export const { setIsLoadingGlobal, setCollection, setCurrentPage } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
