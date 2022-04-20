import { IGetPhotosApi } from 'redux/features/getPhotos/types';

export interface IGalleryState {
  isLoading: boolean;
  collection1: IGetPhotosApi[];
  collection2: IGetPhotosApi[];
  collection3: IGetPhotosApi[];
  collection4: IGetPhotosApi[];
  currentPage: number;
}

export interface IDetailsState {
  pickedPhotoData: IGetPhotosApi | null;
  isLoading: boolean;
}

export interface ISetCollection {
  photos: IGetPhotosApi[];
  collection: number;
}
