import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
  padding-top: ${({ theme }) => theme.spacing(17)};
  padding-bottom: ${({ theme }) => theme.spacing(9)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;
