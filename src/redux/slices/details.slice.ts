import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetPhotosApi } from 'redux/features/getPhotos/types';
import { IDetailsState } from './types';

const state: IDetailsState = {
  pickedPhotoData: null,
  isLoading: false,
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
  },
});

export const { setPickedPhotoData, setIsLoading } = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;
