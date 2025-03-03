import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  & svg {
    display: block !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-radius: 0 0 60px 60px;
    overflow: hidden;
  }
`;
