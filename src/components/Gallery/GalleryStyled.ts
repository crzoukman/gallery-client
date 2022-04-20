import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  gap: 10px;
  border-radius: 6px;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  padding: 30px 20px;

  @media (max-width: 1420px) {
    grid-template-columns: repeat(3, minmax(200px, 300px));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(200px, 300px));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(200px, 300px));
  }
`;

export const Card = styled.div`
  position: relative;

  &:hover::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: '';
    background-color: rgba(0, 0, 0, 0.65);
  }

  &:hover button {
    display: block;
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1;
  display: none;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
`;
