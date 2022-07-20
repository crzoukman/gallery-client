import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetPhotosApi } from 'redux/features/getPhotos/types';
import { IDetailsState } from './types';

const state: IDetailsState = {
  pickedPhotoData: null,
  isLoading: false,
  cache: [] as IGetPhotosApi[],
};

const detailsSlice = createSlice({
  name: 'details',
  initialState: state,
  reducers: {
    setPickedPhotoData: (state, { payload }: PayloadAction<IGetPhotosApi>) => {
      state.pickedPhotoData = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    addDataToCache: (state, { payload }: PayloadAction<IGetPhotosApi>) => {
      const filtred = state.cache.filter((photo) => photo.id !== payload.id);
      filtred.push(payload);
      state.cache = filtred;
    },
  },
});

export const { setPickedPhotoData, setIsLoading, addDataToCache } = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;
