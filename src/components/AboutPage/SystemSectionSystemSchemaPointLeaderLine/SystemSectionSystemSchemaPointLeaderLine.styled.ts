import styled from '@emotion/styled';
import { IStyledContainerProps } from './SystemSectionSystemSchemaPointLeaderLine.types';

export const Container = styled.span<IStyledContainerProps>`
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

export const LeaderLineImgMob = styled.img`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: none;
  }
`;

export const LeaderLineImgDesk = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: none;
  }
`;
