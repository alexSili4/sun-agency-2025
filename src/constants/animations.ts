import { keyframes } from '@emotion/react';

const backdropRotate = keyframes`
 0% {
    --backdrop-rotate: 0deg;
  }

  100% {
    --backdrop-rotate: 360deg;
  }
`;

const animations = {
  backdropRotate,
};

export default animations;
