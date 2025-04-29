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

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(6)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) => `${spacing(14)}px ${spacing(16)}px`};
  }
`;

export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: ${({ theme }) => theme.spacing(8)}px;
  }
`;
