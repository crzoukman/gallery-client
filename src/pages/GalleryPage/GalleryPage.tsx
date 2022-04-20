import { Gallery, Pagination } from 'components';
import { FC } from 'react';
import { WrapperStyled } from './GalleryPage.styled';

const GalleryPage: FC = () => {
  return (
    <WrapperStyled>
      <Gallery />

      <Pagination />
    </WrapperStyled>
  );
};

export default GalleryPage;
