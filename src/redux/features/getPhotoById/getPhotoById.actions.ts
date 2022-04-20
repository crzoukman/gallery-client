import { createAction } from '@reduxjs/toolkit';

export const getPhotoByIdAsyncAction = createAction<string>('getPhotoByIdAsyncAction');
