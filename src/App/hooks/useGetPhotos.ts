import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setCurrentPage, setIsLoadingGlobal } from 'redux/slices/gallery.slice';
import { getPhotosAsyncAction } from 'redux/features/getPhotos/getPhotos.actions';

export const useGetPhotos = () => {
  const { isLoadingGlobal } = useTypedSelector((state) => state.gallery);
  const dispatch = useTypedDispatch();

  function getPhotosHandler() {
    dispatch(setIsLoadingGlobal(true));
    dispatch(getPhotosAsyncAction());
  }

  useEffect(() => {
    const page = localStorage.getItem('gallery-current-page');

    if (page !== null) {
      dispatch(setCurrentPage(+page));
    }

    getPhotosHandler();
  }, []);

  return { isLoadingGlobal };
};
