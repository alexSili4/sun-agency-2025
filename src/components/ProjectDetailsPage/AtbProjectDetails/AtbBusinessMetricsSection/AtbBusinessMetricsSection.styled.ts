import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-color: ${({ theme }) => theme.colors.dark};
    padding-top: ${({ theme }) => theme.spacing(17)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(22)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const Content = styled.div``;

export const Banner = styled.img`
  width: 100%;
`;
