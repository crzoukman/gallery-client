import { FC } from 'react';
import { Header } from 'components';
import { Routing } from 'pages';
import Spinner from 'react-bootstrap/Spinner';
import { AppContainerStyled, SpinnerStyled, WrapperStyled } from './App.styled';
import { useGetPhotos } from './hooks/useGetPhotos';

const App: FC = () => {
  const { isLoading } = useGetPhotos();

  return (
    <AppContainerStyled>
      {isLoading ? (
        <SpinnerStyled>
          <Spinner animation="border" variant="primary" />
        </SpinnerStyled>
      ) : (
        <WrapperStyled>
          <Header />
          <Routing />
        </WrapperStyled>
      )}
    </AppContainerStyled>
  );
};

export default App;
