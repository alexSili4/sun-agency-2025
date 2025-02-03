import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(20)}px ${spacing(5)}px ${spacing(11)}px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(39)}px ${spacing(39)}px ${spacing(15)}px`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    gap: ${({ theme }) => theme.spacing(7)}px;
  }
`;

export const LinksWrap = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
  }
`;
