import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const BgPicture = styled.picture`
  position: relative;
  top: -131px;
  left: calc(50% - 731px);
  display: block;
  width: 1603px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    height: 886px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: -40px;
    left: 0;
    width: 100%;
    aspect-ratio: 1474 / 819;
  }
`;
