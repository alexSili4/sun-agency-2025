import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;
