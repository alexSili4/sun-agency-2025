import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-color: ${({ theme }) => theme.colors.dark};
    padding-top: ${({ theme }) => theme.spacing(35)}px;
    padding-bottom: ${({ theme }) => theme.spacing(0)}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    background-image: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.dark} 75.937%,
      ${({ theme }) => theme.colors.black} 100%
    );
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;
