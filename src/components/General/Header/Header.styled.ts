import styled from '@emotion/styled';
import { IStyledHeaderProps } from './Header.types';

export const StyledHeader = styled.header<IStyledHeaderProps>`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: transparent;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  pointer-events: ${({ showMenuModalWin }) =>
    showMenuModalWin ? 'none' : 'all'};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
`;
