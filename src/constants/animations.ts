import { keyframes } from '@emotion/react';

const backdropRotate = keyframes`
 0% {
    --backdrop-rotate: 0deg;
  }

  100% {
    --backdrop-rotate: 360deg;
  }
`;

const shinyText = keyframes`
 0% {
    background-position: 100%;
  }

  100% {
    background-position: -100%;
  }
`;

const animations = {
  backdropRotate,
  shinyText,
};

export default animations;
