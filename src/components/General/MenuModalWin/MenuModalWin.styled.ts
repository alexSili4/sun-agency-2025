import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme: { spacing, padding } }) =>
    `${spacing(20)}px ${padding.container}px ${spacing(11)}px`};

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
