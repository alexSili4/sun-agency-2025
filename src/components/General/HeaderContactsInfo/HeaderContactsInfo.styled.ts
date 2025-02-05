import styled from '@emotion/styled';
import { IStyledContainerProps } from './HeaderContactsInfo.types';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
  pointer-events: ${({ showMenuModalWin }) =>
    showMenuModalWin ? 'none' : 'all'};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(5)}px;
  }
`;
