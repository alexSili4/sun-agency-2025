import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LinksWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: column-reverse;
    gap: ${({ theme }) => theme.spacing(15)}px;
    width: 38.4vw;
  }
`;
