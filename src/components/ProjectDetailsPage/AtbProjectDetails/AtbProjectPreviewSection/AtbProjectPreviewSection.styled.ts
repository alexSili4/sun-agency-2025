import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  & svg {
    display: block !important;
  }
`;
