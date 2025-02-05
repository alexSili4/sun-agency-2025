import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    /* gap: ${({ theme }) => theme.spacing(132)}px; */
    width: 49vw;
  }
`;
