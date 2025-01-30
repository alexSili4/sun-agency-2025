import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledLangsRadioBtnWrapProps,
} from './LangsMenu.types';

export const Container = styled.div<IStyledContainerProps>`
  display: ${({ isFullMenu }) => isFullMenu && 'flex'};
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isHiddenOnMobile }) => isHiddenOnMobile && 'none'};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    position: ${({ isPositionAbsolute }) =>
      isPositionAbsolute ? 'absolute' : 'relative'};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;

export const LangsRadioBtnWrap = styled.div<IStyledLangsRadioBtnWrapProps>`
  position: ${({ isFullMenu }) => !isFullMenu && 'absolute'};
  top: 0;
  left: 0;
  display: ${({ isFullMenu }) => isFullMenu && 'flex'};
  transform: ${({ isFullMenu }) => !isFullMenu && 'translateX(-100%)'};
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  div:not(:has(input:is(:hover, :focus))) > & {
    transform: ${({ isFullMenu }) => !isFullMenu && 'translateX(0px)'};
  }

  & > label:first-of-type {
    position: ${({ isFullMenu }) => !isFullMenu && 'absolute'};
    top: 0;
    left: 0;
    transform: ${({ isFullMenu }) => !isFullMenu && 'translateX(-100%)'};
  }
`;
