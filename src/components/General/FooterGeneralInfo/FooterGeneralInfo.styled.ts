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
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(90)}px;
`;
