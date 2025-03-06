import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(88)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(152)}px;
  }
`;
