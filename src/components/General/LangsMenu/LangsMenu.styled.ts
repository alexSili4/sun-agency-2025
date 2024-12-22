import styled from '@emotion/styled';
import {
  IStyledContainerProps,
  IStyledLangsRadioBtnWrapProps,
} from './LangsMenu.types';

export const Container = styled.div<IStyledContainerProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: ${({ isFullMenu }) => isFullMenu && 'flex'};
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
