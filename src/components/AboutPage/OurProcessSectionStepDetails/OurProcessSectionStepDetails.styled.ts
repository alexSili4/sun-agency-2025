import styled from '@emotion/styled';
import { IStyledContainerProps } from './OurProcessSectionStepDetails.types';

export const Container = styled.div<IStyledContainerProps>`
  position: ${({ isPositionAbsolute }) =>
    isPositionAbsolute ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: ${({ isPositionAbsolute }) => (isPositionAbsolute ? 50 : 0)}%;
    flex-direction: row-reverse;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(10)}px;
    transform: translateY(
      ${({ isPositionAbsolute }) => (isPositionAbsolute ? -50 : 0)}%
    );
  }
`;
