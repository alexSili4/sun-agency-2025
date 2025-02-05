import styled from '@emotion/styled';

export const ShowClientDetailsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  margin-right: ${({ theme }) => theme.spacing(4)}px;
  background-color: transparent;
`;

export const ClientLogo = styled.img`
  width: auto;
  height: 54px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 80px;
  }
`;
