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
  pointer-events: none;
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
