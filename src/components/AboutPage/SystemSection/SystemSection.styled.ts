import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
  background-color: ${({ theme }) => theme.colors.dark};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(57)}px;
    padding-bottom: ${({ theme }) => theme.spacing(47)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(9)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(25)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-items: center;
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;
