import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(12)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(23)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(12)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(23)}px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(14)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(20)}px;
  }
`;
