import { FC } from 'react';
import { Header } from 'components';
import { Routing } from 'pages';
import { AppContainerStyled, WrapperStyled, ZoneStyled } from './App.styled';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsMenuOpen } from 'redux/slices/header.slice';

const App: FC = () => {
  const { isMenuOpen } = useTypedSelector((state) => state.header);
  const dispatch = useTypedDispatch();

  const closeMenuHandler = () => {
    dispatch(setIsMenuOpen(false));
  };

  return (
    <AppContainerStyled>
      <WrapperStyled>
        <Header />
        <Routing />
      </WrapperStyled>
      {isMenuOpen && <ZoneStyled onClick={closeMenuHandler} />}
    </AppContainerStyled>
  );
};

export default App;
