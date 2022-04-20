import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { setIsLoading, setPickedPhotoData } from 'redux/slices/details.slice';
import { IGetPhotosApi } from '../getPhotos/types';
import { getPhotoByIdAsyncAction } from './getPhotoById.actions';
import { getPhotoByIdApi } from './getPhotoById.api';
import { AxiosResponse } from 'axios';
import { config } from 'config';
import { delay } from 'utils/delay';

function* getPhotoByIdWorker(action: PayloadAction<string>) {
  yield delay(config.FETCHING_DELAY);
  const photoData: AxiosResponse<IGetPhotosApi[]> = yield call(getPhotoByIdApi, action.payload);
  yield put(setPickedPhotoData(photoData.data[0]));
  yield put(setIsLoading(false));
}

export function* getPhotoByIdWatcher() {
  yield takeEvery(getPhotoByIdAsyncAction, getPhotoByIdWorker);
}
