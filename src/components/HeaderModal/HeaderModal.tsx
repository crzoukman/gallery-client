import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from 'redux/hooks';
import { setIsMenuOpen } from 'redux/slices/header.slice';
import {
  EmailWrapperStyled,
  LinksStyled,
  LinkStyled,
  ModalWrapperStyled,
  PersonalStyled,
} from './HeaderModal.styled';
import { ReactComponent as AvatarIcon } from 'assets/avatar.svg';
import { ReactComponent as EmailIcon } from 'assets/email.svg';

const HeaderModal: FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const currentPage = window.location.pathname;

  const clickHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const navigateHandler = (to: string) => {
    if (to === 'gallery') {
      navigate('/');
    }

    if (to === 'about') {
      navigate('/about');
    }

    dispatch(setIsMenuOpen(false));
  };

  return (
    <ModalWrapperStyled onClick={(e) => clickHandler(e)}>
      <PersonalStyled>
        <div>Zoukman</div>
        <AvatarIcon style={{ width: '60px' }} />
      </PersonalStyled>

      <EmailWrapperStyled>
        <EmailIcon style={{ width: '20px' }} />
        <div>crzoukman@gmail.com</div>
      </EmailWrapperStyled>

      <LinksStyled>
        <LinkStyled page={currentPage} who={'/'} onClick={() => navigateHandler('gallery')}>
          Gallery
        </LinkStyled>
        <LinkStyled page={currentPage} who={'/about'} onClick={() => navigateHandler('about')}>
          About Me
        </LinkStyled>
      </LinksStyled>
    </ModalWrapperStyled>
  );
};

export default HeaderModal;
