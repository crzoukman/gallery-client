import { FC } from 'react';
import { Header } from 'components';
import { Routing } from 'pages';
import { AppContainerStyled, WrapperStyled } from './App.styled';

const App: FC = () => {
  return (
    <AppContainerStyled>
      <WrapperStyled>
        <Header />
        <Routing />
      </WrapperStyled>
    </AppContainerStyled>
  );
};

export default App;
