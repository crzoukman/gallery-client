import { FC } from 'react';
import { MenuStyled, WrapperStyled } from './Header.styled';
import { ReactComponent as OpenIcon } from 'assets/open.svg';
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { setIsMenuOpen } from 'redux/slices/header.slice';
import HeaderModal from 'components/HeaderModal/HeaderModal';

const iconStyles = {
  cursor: 'pointer',
  width: '40px',
};

const Header: FC = () => {
  const { isMenuOpen } = useTypedSelector((state) => state.header);
  const dispatch = useTypedDispatch();

  const menuHandler = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <WrapperStyled>
      <MenuStyled onClick={menuHandler}>
        {!isMenuOpen && <OpenIcon style={iconStyles} />}
        {isMenuOpen && <CloseIcon style={iconStyles} />}
        {isMenuOpen && <HeaderModal />}
      </MenuStyled>
    </WrapperStyled>
  );
};

export default Header;
