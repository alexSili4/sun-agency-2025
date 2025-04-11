import styled from '@emotion/styled';
import {
  IStyledCoinProps,
  IStyledContainerProps,
} from './SystemSectionSystemSchemaImg.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: ${({ topMob }) => (topMob ? `${topMob}px` : 'auto')};
  bottom: ${({ bottomMob }) => (bottomMob ? `${bottomMob}px` : 'auto')};
  left: ${({ leftMob }) => (leftMob ? `${leftMob}px` : 'auto')};
  right: ${({ rightMob }) => (rightMob ? `${rightMob}px` : 'auto')};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => (topDesk ? `${topDesk}px` : 'auto')};
    bottom: ${({ bottomDesk }) => (bottomDesk ? `${bottomDesk}px` : 'auto')};
    left: ${({ leftDesk }) => (leftDesk ? `${leftDesk}px` : 'auto')};
    right: ${({ rightDesk }) => (rightDesk ? `${rightDesk}px` : 'auto')};
  }
`;

export const Coin = styled.img<IStyledCoinProps>`
  width: ${({ sizeMob }) => sizeMob}px;
  aspect-ratio: 1 / 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: ${({ sizeDesk }) => sizeDesk}px;
  }
`;
