import { takeEvery, call, fork, put } from 'redux-saga/effects';
import { setCollection, setIsLoading } from 'redux/slices/gallery.slice';
import { getPhotosAsyncAction } from './getPhotos.actions';
import { getPhotosApi } from './getPhotos.api';
import { IGetPhotosApi } from './types';
import { AxiosResponse } from 'axios';
import { delay } from 'utils/delay';
import { config } from 'config';

function* loadPhotos(collection: number) {
  const photos: AxiosResponse<IGetPhotosApi[]> = yield call(getPhotosApi, collection);
  yield put(
    setCollection({
      photos: photos.data,
      collection,
    }),
  );
}

function* fetchAll() {
  yield fork(loadPhotos, 1);
  yield fork(loadPhotos, 2);
  yield fork(loadPhotos, 3);
  yield fork(loadPhotos, 4);
}

function* getPhotosWorker() {
  yield delay(config.FETCHING_DELAY);
  yield call(fetchAll);
  yield put(setIsLoading(false));
}

export function* getPhotosWatcher() {
  yield takeEvery(getPhotosAsyncAction, getPhotosWorker);
}
