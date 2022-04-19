import { Pagination } from 'components';
import { FC } from 'react';
import { useTypedSelector } from 'redux/hooks';

const Gallery: FC = () => {
  const { collection1, collection2, collection3, collection4 } = useTypedSelector(
    (state) => state.gallery,
  );

  return (
    <div>
      <div>
        <div>{collection1.map((image) => image.id + ' - ')}</div>
        <div>{collection2.map((image) => image.id + ' - ')}</div>
        <div>{collection3.map((image) => image.id + ' - ')}</div>
        <div>{collection4.map((image) => image.id + ' - ')}</div>
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default Gallery;
