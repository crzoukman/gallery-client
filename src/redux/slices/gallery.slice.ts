import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetCollection, IGalleryState } from './types';

const state: IGalleryState = {
  isLoading: false,
  collection1: [],
  collection2: [],
  collection3: [],
  collection4: [],
  currentPage: 1,
  initialLoadCompleted: false,
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
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setInitialLoadCompleted: (state, { payload }: PayloadAction<boolean>) => {
      state.initialLoadCompleted = payload;
    },
  },
});

export const { setIsLoading, setCollection, setCurrentPage, setInitialLoadCompleted } =
  gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
