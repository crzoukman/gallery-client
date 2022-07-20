import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setCurrentPage, setIsLoading } from 'redux/slices/gallery.slice';
import { getPhotosAsyncAction } from 'redux/features/getPhotos/getPhotos.actions';

export const useGetPhotos = () => {
  const { isLoading, initialLoadCompleted } = useTypedSelector((state) => state.gallery);
  const dispatch = useTypedDispatch();

  function getPhotosHandler() {
    dispatch(setIsLoading(true));
    dispatch(getPhotosAsyncAction());
  }

  useEffect(() => {
    if (!initialLoadCompleted) {
      const page = localStorage.getItem('gallery-current-page');

      if (page !== null) {
        dispatch(setCurrentPage(+page));
      }

      getPhotosHandler();
    }
  }, []);

  return { isLoading };
};
