import styled from '@emotion/styled';

export const Container = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 23.5vw;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    align-items: center;
    gap: ${({ theme }) => theme.spacing(6)}px;
  }
`;

export const Total = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.pliska};
  font-style: italic;
  font-size: 26.95px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)}px;
  }
`;
