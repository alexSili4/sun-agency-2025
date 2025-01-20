import { FC, useEffect, useRef } from 'react';
import { IProps } from './LottieGlowingAnimation.types';
import { StyledLottie } from './LottieGlowingAnimation.styled';
import { LottieRefCurrentProps } from 'lottie-react';

const LottieGlowingAnimation: FC<IProps> = ({
  animationData,
  isHoverOrFocus,
  width,
  height,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isHoverOrFocus) {
      lottieRef.current?.setDirection(1);
    } else {
      lottieRef.current?.setDirection(-1);
    }

    lottieRef.current?.play();
  }, [isHoverOrFocus]);

  return (
    <StyledLottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      autoplay={isHoverOrFocus}
      height={height}
      width={width}
    />
  );
};

export default LottieGlowingAnimation;
