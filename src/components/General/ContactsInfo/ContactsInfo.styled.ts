import styled from '@emotion/styled';
import { IStyledContainerProps } from './ContactsInfo.types';

export const Container = styled.div<IStyledContainerProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  pointer-events: ${({ showMenuModalWin }) =>
    showMenuModalWin ? 'none' : 'all'};
  opacity: ${({ showMenuModalWin }) => (showMenuModalWin ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;
