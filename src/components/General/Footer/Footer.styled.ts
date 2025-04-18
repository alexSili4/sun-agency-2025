import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(69)}px;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(123)}px;
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding-top: ${({ theme }) => theme.spacing(17)}px;
  background-color: inherit;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(24)}px;
    padding-top: ${({ theme }) => theme.spacing(9)}px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }
`;
