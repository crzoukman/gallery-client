import { IGetPhotosApi } from 'redux/features/getPhotos/types';

export interface IState {
  isLoadingGlobal: boolean;
  collection1: IGetPhotosApi[];
  collection2: IGetPhotosApi[];
  collection3: IGetPhotosApi[];
  collection4: IGetPhotosApi[];
  currentPage: number;
}

export interface ISetCollection {
  photos: IGetPhotosApi[];
  collection: number;
}
