import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const InfoStyled = styled.div`
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px,
    rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px,
    rgba(240, 46, 170, 0.05) -25px 25px;
  padding: 30px 40px;

  & h2 {
    font-size: 24px;
    font-weight: 600;
  }

  & div {
    font-size: 18px;
  }
`;
