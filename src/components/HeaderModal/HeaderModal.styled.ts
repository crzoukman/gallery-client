import styled from 'styled-components';

export const ModalWrapperStyled = styled.div`
  padding: 40px 40px;
  position: absolute;
  left: -40px;
  top: 0;
  transform: translateX(-100%);
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PersonalStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  font-weight: 600;
`;

export const EmailWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  & div {
    margin-bottom: 5px;
  }
`;

export const LinksStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinkStyled = styled.div<{ page: string; who: string }>`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: lightblue;
    bottom: -6px;
    display: ${({ page, who }) => (page === who ? 'block' : 'none')};
  }
`;
