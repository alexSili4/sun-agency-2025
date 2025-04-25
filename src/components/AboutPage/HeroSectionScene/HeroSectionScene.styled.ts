import styled from '@emotion/styled';
import { IStyledContainerProps } from './HeroSectionScene.types';

export const Container = styled.div<IStyledContainerProps>`
  position: absolute;
  top: 280px;
  left: calc(50% - 325px);
  display: flex;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc.about};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    top: 358px;
    left: calc(50% - 507px);
    transform: translateX(${({ translateX }) => translateX}px)
      translateY(${({ translateY }) => translateY}px)
      rotate(${({ rotate }) => rotate}deg) scale(${({ scale }) => scale});
  }
`;

export const Image = styled.img`
  width: 594px;
  height: 258px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 1378px;
    height: 598px;
  }
`;
