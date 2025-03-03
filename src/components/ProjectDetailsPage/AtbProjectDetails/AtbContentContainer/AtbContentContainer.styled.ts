import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const Content = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 46.4vw;
    max-width: 668px;
  }
`;
