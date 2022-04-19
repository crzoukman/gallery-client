import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsLoading } from 'redux/slices/gallery.slice';
import { getPhotosAsyncAction } from 'redux/features/getPhotos/getPhotos.actions';

export const useGetPhotos = () => {
  const { isLoading } = useTypedSelector((state) => state.gallery);
  const dispatch = useTypedDispatch();

  function getPhotosHandler() {
    dispatch(setIsLoading(true));
    dispatch(getPhotosAsyncAction());
  }

  useEffect(() => {
    getPhotosHandler();
  }, []);

  return { isLoading };
};
