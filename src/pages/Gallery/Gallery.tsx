import { FC, useEffect } from 'react';
import { getPhotosAsyncAction } from 'redux/features/getPhotos/getPhotos.actions';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsLoading } from 'redux/slices/gallery.slice';

const Gallery: FC = () => {
  const { isLoading } = useTypedSelector((state) => state.gallery);
  const dispatch = useTypedDispatch();

  function getPhotosHandler() {
    dispatch(setIsLoading(true));
    dispatch(getPhotosAsyncAction());
  }

  useEffect(() => {
    getPhotosHandler();
  }, []);

  return <div>{isLoading ? 'Loading...' : 'Photos has been loaded'}</div>;
};

export default Gallery;
