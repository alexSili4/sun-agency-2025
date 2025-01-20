import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Background = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(43)};
  padding-bottom: ${({ theme }) => theme.spacing(18)};
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  overflow: hidden;
`;

