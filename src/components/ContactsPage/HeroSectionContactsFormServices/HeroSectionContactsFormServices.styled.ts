import styled from '@emotion/styled';

export const BtnWrap = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;
  background: rgba(51, 51, 51, 0.2);
  padding: ${({ theme }) => theme.spacing(4)}px;

  & > svg {
    color: #444444;
  }
`;

export const BtnTitle = styled.span`
  flex-grow: 1;
  color: #444444;
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
