import { FC, useEffect, useRef } from 'react';
import { IProps } from './LottieGlowingAnimation.types';
import { StyledLottie } from './LottieGlowingAnimation.styled';
import { LottieRefCurrentProps } from 'lottie-react';

const LottieGlowingAnimation: FC<IProps> = ({
  animationData,
  isHoverOrFocus,
  width,
  height,
  loop = false,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isHoverOrFocus) {
      if (lottieRef.current?.animationItem) {
        lottieRef.current.animationItem.loop = loop;
      }

      lottieRef.current?.setDirection(1);
      lottieRef.current?.play();
    } else {
      if (lottieRef.current?.animationItem) {
        lottieRef.current.animationItem.loop = false;
      }

      lottieRef.current?.setDirection(-1);
      lottieRef.current?.play();
    }
  }, [isHoverOrFocus, loop]);

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
