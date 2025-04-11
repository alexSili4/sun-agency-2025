import styled from '@emotion/styled';
import { IStyledContainerProps } from './SystemSectionSystemSchemaPointDetails.types';

export const Container = styled.span<IStyledContainerProps>`
  position: absolute;
  top: ${({ topMob }) => (topMob ? `${topMob}px` : 'auto')};
  bottom: ${({ bottomMob }) => (bottomMob ? `${bottomMob}px` : 'auto')};
  left: ${({ leftMob }) => (leftMob ? `${leftMob}px` : 'auto')};
  right: ${({ rightMob }) => (rightMob ? `${rightMob}px` : 'auto')};
  padding-top: ${({ paddingTopMob }) => paddingTopMob}px;
  padding-bottom: ${({ paddingBottomMob }) => paddingBottomMob}px;
  padding-left: ${({ paddingLeftMob }) => paddingLeftMob}px;
  padding-right: ${({ paddingRightMob }) => paddingRightMob}px;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => (topDesk ? `${topDesk}px` : 'auto')};
    bottom: ${({ bottomDesk }) => (bottomDesk ? `${bottomDesk}px` : 'auto')};
    left: ${({ leftDesk }) => (leftDesk ? `${leftDesk}px` : 'auto')};
    right: ${({ rightDesk }) => (rightDesk ? `${rightDesk}px` : 'auto')};
    padding-top: ${({ paddingTopDesk }) => paddingTopDesk}px;
    padding-bottom: ${({ paddingBottomDesk }) => paddingBottomDesk}px;
    padding-left: ${({ paddingLeftDesk }) => paddingLeftDesk}px;
    padding-right: ${({ paddingRightDesk }) => paddingRightDesk}px;
  }

  button:not(:is(:hover, :focus)) > & {
    opacity: 0;
  }
`;
