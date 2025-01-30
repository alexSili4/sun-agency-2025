import styled from '@emotion/styled';
import { IStyledContainerProps } from './GeneralContainer.types';

export const Container = styled.div<IStyledContainerProps>`
  position: ${({ isPositionRelative, isPositionAbsolute }) =>
    isPositionRelative
      ? 'relative'
      : isPositionAbsolute
      ? 'absolute'
      : 'static'};
  top: ${({ top }) => top};
  left: ${({ isCenterXPosition }) => isCenterXPosition && '50%'};
  width: 100%;
  height: ${({ isFullHeight }) => isFullHeight && '100%'};
  padding-left: ${({ theme }) => theme.padding.container}px;
  padding-right: ${({ theme }) => theme.padding.container}px;
  margin-left: auto;
  margin-right: auto;
  pointer-events: ${({ isPointerEventsNone }) => isPointerEventsNone && 'none'};
  transform: translateX(
    ${({ isCenterXPosition }) => (isCenterXPosition ? '-50%' : 0)}
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ theme: { containerWidth, padding } }) =>
      containerWidth.desktop + padding.container * 2}px;
  }
`;
