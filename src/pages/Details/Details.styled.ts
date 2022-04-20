import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapperStyled = styled.div`
  min-width: 400px;
  width: 400px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DataItem = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 30px;
  border-radius: 10px;

  & span {
    display: inline-block;
    font-size: 24px;
  }

  & div {
    font-size: 18px;
  }
`;

export const ButtonStyled = styled.div`
  border: none;
  outline: none;
  text-align: center;
  padding: 14px 20px;
  cursor: pointer;
  width: 100px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;
