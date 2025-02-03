import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const ScrollBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;
