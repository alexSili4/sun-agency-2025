import styled from '@emotion/styled';
import { IStyledContainerProps } from './GeneralContainer.types';

export const Container = styled.div<IStyledContainerProps>`
  position: ${({ isPositionRelative, isPositionAbsolute }) =>
    isPositionRelative ? 'relative' : isPositionAbsolute ? 'absolute' : ''};
  top: ${({ top }) => top};
  left: ${({ isCenterXPosition }) => isCenterXPosition && '50%'};
  width: 100%;
  height: ${({ isFullHeight }) => isFullHeight && '100%'};
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;
  pointer-events: ${({ isPointerEventsNone }) => isPointerEventsNone && 'none'};
  transform: ${({ isCenterXPosition }) =>
    isCenterXPosition && 'translateX(-50%)'};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 96vw;
  }
`;
