import { FC, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsLoading } from 'redux/slices/details.slice';
import { SpinnerStyled } from 'UI/Spinner.styled';
import { getPhotoByIdAsyncAction } from './../../redux/features/getPhotoById/getPhotoById.actions';

const Details: FC = () => {
  const dispatch = useTypedDispatch();
  const { pickedPhotoData, isLoading } = useTypedSelector((state) => state.details);
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
    const id = localStorage.getItem('last-picked-image-id');
    dispatch(getPhotoByIdAsyncAction(id ?? '1'));
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
