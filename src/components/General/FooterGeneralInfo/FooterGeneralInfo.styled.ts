import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 1px;
  background-image: conic-gradient(
    #a3a3a3,
    ${({ theme }) => theme.colors.body},
    ${({ theme }) => theme.colors.body},
    ${({ theme }) => theme.colors.body},
    #a3a3a3
  );
`;

export const ContentWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  padding-top: ${({ theme }) => theme.spacing(12)};
  padding-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(90)};
`;
