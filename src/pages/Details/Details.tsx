import SuspenseImage from 'components/SuspenseImage/SuspenseImage';
import { FC, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsLoading, setPickedPhotoData } from 'redux/slices/details.slice';
import { SpinnerStyled } from 'UI/Spinner.styled';
import { getPhotoByIdAsyncAction } from './../../redux/features/getPhotoById/getPhotoById.actions';
import {
  ButtonStyled,
  ContentWrapper,
  DataItem,
  DataWrapper,
  ImageWrapperStyled,
  WrapperStyled,
} from './Details.styled';

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
        pickedPhotoData && (
          <WrapperStyled>
            <ContentWrapper>
              <ImageWrapperStyled>{<SuspenseImage src={pickedPhotoData.url} />}</ImageWrapperStyled>
              <DataWrapper>
                <DataItem>
                  <span>ID</span>
                  <div>{pickedPhotoData.id}</div>
                </DataItem>
                <DataItem>
                  <span>Category</span>
                  <div> {pickedPhotoData.albumId}</div>
                </DataItem>
                <DataItem>
                  <span>Title</span>
                  <div>{pickedPhotoData.title}</div>
                </DataItem>
              </DataWrapper>
            </ContentWrapper>

            <ButtonStyled onClick={goBackHandler}>Back</ButtonStyled>
          </WrapperStyled>
        )
      )}
    </div>
  );
};

export default Details;
