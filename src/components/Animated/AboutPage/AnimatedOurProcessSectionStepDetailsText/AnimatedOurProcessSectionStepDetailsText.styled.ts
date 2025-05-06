import styled from '@emotion/styled';

export const Container = styled.div`
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 23.5vw;
  }
`;
