import styled from '@emotion/styled';
import {
  IStyledBackdropProps,
  IStyledContainerProps,
} from './GlowingContainer.types';
import { animations } from '@/constants';

export const Container = styled.div<IStyledContainerProps>`
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
`;

export const Backdrop = styled.div<IStyledBackdropProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #452006;
  border-radius: ${({ borderRadius }) => borderRadius};
  transform: translateX(-50%) translateY(-50%);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  div:not(:has(button:is(:hover, :focus), a:is(:hover, :focus))) > & {
    opacity: 0;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background-image: conic-gradient(
      from var(--backdrop-rotate),
      #452006,
      #ffb645,
      #ffeb78,
      #f58500,
      #ecdec5
    );
    border-radius: inherit;
    animation: ${animations.backdropRotate} 4000ms linear infinite;
  }

  &::after {
    filter: blur(10px);
  }
`;
