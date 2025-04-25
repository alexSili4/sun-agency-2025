import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.dark} 54.983%,
    ${({ theme }) => theme.colors.black} 100%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(14)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(25)}px;
  }
`;
