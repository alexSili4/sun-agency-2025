import styled from '@emotion/styled';
import { IStyledLangsRadioBtnWrapProps } from './LangsMenu.types';

export const Container = styled.div`
  position: relative;
`;

export const LangsRadioBtnWrap = styled.div<IStyledLangsRadioBtnWrapProps>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  div:not(:has(input:is(:hover, :focus))) > & {
    transform: ${({ isFullMenu }) => !isFullMenu && 'translateX(0px)'};
  }

  & > label:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
`;
