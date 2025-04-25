import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(22)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(26)}px;
    padding-bottom: ${({ theme }) => theme.spacing(24)}px;
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(25)}px;
  }
`;
