import { FC } from 'react';
import { Pagination as PaginationX } from 'react-bootstrap';
import { setCurrentPage, setIsLoading } from 'redux/slices/gallery.slice';
import { getPhotosAsyncAction } from 'redux/features/getPhotos/getPhotos.actions';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { config } from 'config';

const Pagination: FC = () => {
  const dispatch = useTypedDispatch();
  const { currentPage } = useTypedSelector((state) => state.gallery);

  const pageFetching = () => {
    dispatch(setIsLoading(true));
    dispatch(getPhotosAsyncAction());
  };

  const switchPageHandler = (page: number) => {
    dispatch(setCurrentPage(page));
    localStorage.setItem('gallery-current-page', String(page));
    pageFetching();
  };

  return (
    <PaginationX>
      <PaginationX.First disabled={currentPage === 0} onClick={() => switchPageHandler(0)} />

      <PaginationX.Prev
        disabled={currentPage === 0}
        onClick={() => switchPageHandler(currentPage - 1)}
      />

      <PaginationX.Item disabled={true}>{currentPage + 1}</PaginationX.Item>

      <PaginationX.Next
        disabled={currentPage === config.MAX_PAGE}
        onClick={() => switchPageHandler(currentPage + 1)}
      />

      <PaginationX.Last
        onClick={() => switchPageHandler(config.MAX_PAGE)}
        disabled={currentPage === config.MAX_PAGE}
      />
    </PaginationX>
  );
};

export default Pagination;
