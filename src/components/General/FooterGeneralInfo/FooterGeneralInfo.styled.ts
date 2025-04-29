import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 1px;
  background-image: conic-gradient(
    #a3a3a3,
    ${({ theme }) => theme.colors.dark},
    ${({ theme }) => theme.colors.dark},
    ${({ theme }) => theme.colors.dark},
    #a3a3a3
  );
  background-color: inherit;
`;

export const ContentWrap = styled.div`
  background-color: inherit;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 57.9vw;
  }
`;
