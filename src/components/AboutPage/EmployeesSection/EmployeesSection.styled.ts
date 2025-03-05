import styled from '@emotion/styled';

export const Section = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.dark} 75.937%,
    ${({ theme }) => theme.colors.black} 100%
  );
  padding-top: ${({ theme }) => theme.spacing(12)}px;
  padding-bottom: ${({ theme }) => theme.spacing(12)}px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;
