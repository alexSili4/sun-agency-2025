import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const Background = styled.div`
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.darkBg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const Form = styled.form``;
