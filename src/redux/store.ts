import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { getPhotosWatcher } from './features/getPhotos/getPhotos.saga';
import { galleryReducer } from './slices/gallery.slice';

const sagaWiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([getPhotosWatcher()]);
}

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaWiddleware],
});

sagaWiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
