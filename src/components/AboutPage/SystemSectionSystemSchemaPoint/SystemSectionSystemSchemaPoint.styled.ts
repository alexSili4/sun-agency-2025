import styled from '@emotion/styled';
import { IStyledContainerProps } from './SystemSectionSystemSchemaPoint.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: ${({ topMob }) => topMob}px;
  left: ${({ leftMob }) => leftMob}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ topDesk }) => topDesk}px;
    left: ${({ leftDesk }) => leftDesk}px;
  }
`;

export const Point = styled.button`
  position: relative;
  width: 5px;
  aspect-ratio: 1 / 1;
  border: 0.3px solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.06);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 14px;
    border: 0.83px solid rgba(255, 255, 255, 0.07);
  }
`;
