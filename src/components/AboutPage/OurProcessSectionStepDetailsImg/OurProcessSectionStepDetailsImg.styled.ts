import styled from '@emotion/styled';
import { IStyledContainerProps } from './OurProcessSectionStepDetailsImg.types';

export const Container = styled.div<IStyledContainerProps>`
  align-self: center;
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc.process};
`;

export const Image = styled.img`
  width: 316px;
  height: 322px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 516px;
    height: 526px;
  }
`;
