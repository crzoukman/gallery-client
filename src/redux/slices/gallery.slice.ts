import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetCollection, IState } from './types';

const state: IState = {
  isLoading: false,
  collection1: [],
  collection2: [],
  collection3: [],
  collection4: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: state,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
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
  },
});

export const { setIsLoading, setCollection } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
