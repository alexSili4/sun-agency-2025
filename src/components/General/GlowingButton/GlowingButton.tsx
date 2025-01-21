import { FC } from 'react';
import { IProps } from './GlowingButton.types';
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';
import { useIsHoverOrFocus } from '@/hooks';
import { Button } from './GlowingButton.styled';

const GlowingButton: FC<IProps> = ({
  width,
  children,
  onClick,
  animationData,
  glowHeight,
  glowWidth,
}) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <Button
      width={width}
      onClick={onClick}
      onBlur={onItemBlur}
      onFocus={onItemFocus}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
    >
      <LottieGlowingAnimation
        animationData={animationData}
        isHoverOrFocus={isHoverOrFocus}
        height={glowHeight}
        width={glowWidth}
      />
      {children}
    </Button>
  );
};

export default GlowingButton;
