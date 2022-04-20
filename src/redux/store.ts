import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { getPhotoByIdWatcher } from './features/getPhotoById/getPhotoById.saga';
import { getPhotosWatcher } from './features/getPhotos/getPhotos.saga';
import { detailsReducer } from './slices/details.slice';
import { galleryReducer } from './slices/gallery.slice';

const sagaWiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([getPhotosWatcher(), getPhotoByIdWatcher()]);
}

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaWiddleware],
});

sagaWiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
