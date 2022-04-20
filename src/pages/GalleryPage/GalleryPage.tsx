import { Gallery, Pagination } from 'components';
import { FC } from 'react';
import { WrapperStyled } from './GalleryPage.styled';
import { useGetPhotos } from './hooks/useGetPhotos';
import Spinner from 'react-bootstrap/Spinner';
import { SpinnerStyled } from 'UI/Spinner.styled';

const GalleryPage: FC = () => {
  const { isLoading } = useGetPhotos();

  return (
    <WrapperStyled>
      {isLoading ? (
        <SpinnerStyled>
          <Spinner animation="border" variant="primary" />
        </SpinnerStyled>
      ) : (
        <Gallery />
      )}
      <Pagination />
    </WrapperStyled>
  );
};

export default GalleryPage;
