import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Background = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(26)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(43)}px;
    padding-bottom: ${({ theme }) => theme.spacing(18)}px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
  }
`;
