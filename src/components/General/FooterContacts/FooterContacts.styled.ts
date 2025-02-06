import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
    align-items: flex-start;
    width: 38.4vw;
  }
`;

export const Title = styled.p`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 48px;
  }
`;
