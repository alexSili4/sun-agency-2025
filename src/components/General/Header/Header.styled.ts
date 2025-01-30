import styled from '@emotion/styled';
import { IStyledHeaderProps } from './Header.types';

export const StyledHeader = styled.header<IStyledHeaderProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  width: 100%;
  pointer-events: ${({ showMenuModalWin }) =>
    showMenuModalWin ? 'none' : 'all'};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-top: ${({ theme }) => theme.spacing(6)}px;
    padding-bottom: ${({ theme }) => theme.spacing(6)}px;
  }
`;
