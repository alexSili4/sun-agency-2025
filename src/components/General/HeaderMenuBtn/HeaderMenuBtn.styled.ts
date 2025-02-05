import styled from '@emotion/styled';
import { IStyledButtonProps } from './HeaderMenuBtn.types';

export const Button = styled.button<IStyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 0;
  border-radius: 13px;
  opacity: ${({ shouldHide }) => shouldHide && 0};
  transform: translateY(${({ shouldHide }) => shouldHide && -100}%);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionDurationAndFunc};
  pointer-events: all;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: ${({ isDeskMenuBtn }) => isDeskMenuBtn && 'none'};
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;

    & > * {
      position: absolute !important;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: ${({ isMobileMenuBtn }) => isMobileMenuBtn && 'none'};
    width: 54px;
    border-radius: 50%;
    background-color: transparent;
  }
`;
