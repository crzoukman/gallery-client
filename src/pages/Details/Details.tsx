import { FC, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsLoading, setPickedPhotoData } from 'redux/slices/details.slice';
import { SpinnerStyled } from 'UI/Spinner.styled';
import { getPhotoByIdAsyncAction } from './../../redux/features/getPhotoById/getPhotoById.actions';

const Details: FC = () => {
  const dispatch = useTypedDispatch();
  const { pickedPhotoData, isLoading, cache } = useTypedSelector((state) => state.details);
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const getPhotoDataFromCache = (id: number) => {
    const data = cache.filter((photo) => photo.id === id);

    return data.length ? data[0] : null;
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
    const id = localStorage.getItem('last-picked-image-id');

    if (id) {
      const data = getPhotoDataFromCache(+id);

      if (!data) {
        dispatch(getPhotoByIdAsyncAction(id));
      } else {
        dispatch(setPickedPhotoData(data));
        dispatch(setIsLoading(false));
        console.log('data got from the cache');
      }
    } else {
      dispatch(getPhotoByIdAsyncAction(id ?? '1'));
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <SpinnerStyled>
          <Spinner animation="border" variant="primary" />
        </SpinnerStyled>
      ) : (
        <div>
          <div>{pickedPhotoData?.id}</div>
          <div onClick={goBackHandler}>Back</div>
        </div>
      )}
    </div>
  );
};

export default Details;
