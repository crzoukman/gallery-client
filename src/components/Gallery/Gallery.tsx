import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useTypedSelector } from 'redux/hooks';
import { CardsWrapperStyled, WrapperStyled } from './GalleryStyled';
import SuspenseImage from 'components/SuspenseImage/SuspenseImage';

const Gallery: FC = () => {
  const { collection1, collection2, collection3, collection4 } = useTypedSelector(
    (state) => state.gallery,
  );

  return (
    <WrapperStyled>
      <CardsWrapperStyled>
        {collection1.map((image) => (
          <Card key={image.id}>
            <SuspenseImage src={image.url} />
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
