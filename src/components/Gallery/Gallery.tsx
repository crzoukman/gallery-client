import { FC } from 'react';
import { useTypedSelector } from 'redux/hooks';
import { CardsWrapperStyled, WrapperStyled, Card, ButtonStyled } from './GalleryStyled';
import SuspenseImage from 'components/SuspenseImage/SuspenseImage';
import { IGetPhotosApi } from 'redux/features/getPhotos/types';
import { useNavigate } from 'react-router-dom';

const Gallery: FC = () => {
  const { collection1, collection2, collection3, collection4 } = useTypedSelector(
    (state) => state.gallery,
  );
  const navigate = useNavigate();

  const navHandler = (data: IGetPhotosApi) => {
    localStorage.setItem('last-picked-image', JSON.stringify(data));
    navigate('/details');
  };

  return (
    <WrapperStyled>
      <CardsWrapperStyled>
        {collection1.map((image) => (
          <Card key={image.id}>
            <SuspenseImage src={image.url} />
            <ButtonStyled onClick={() => navHandler(image)}>More</ButtonStyled>
          </Card>
        ))}
      </CardsWrapperStyled>

      <CardsWrapperStyled>
        {collection2.map((image) => (
          <Card key={image.id}>
            <SuspenseImage src={image.url} />
          </Card>
        ))}
      </CardsWrapperStyled>

      <CardsWrapperStyled>
        {collection3.map((image) => (
          <Card key={image.id}>
            <SuspenseImage src={image.url} />
          </Card>
        ))}
      </CardsWrapperStyled>

      <CardsWrapperStyled>
        {collection4.map((image) => (
          <Card key={image.id}>
            <SuspenseImage src={image.url} />
          </Card>
        ))}
      </CardsWrapperStyled>
    </WrapperStyled>
  );
};

export default Gallery;
