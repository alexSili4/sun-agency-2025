import { FC } from 'react';
import { IProps } from './GlowingButton.types';
import { useIsHoverOrFocus } from '@/hooks';
import { Button } from './GlowingButton.styled';
// ----- components
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';

const GlowingButton: FC<IProps> = ({
  width,
  children,
  onClick,
  animationData,
  glowHeight,
  glowWidth,
  isPositionAbsolute = false,
  rightDesk = '0px',
  rightMob = '0px',
  topDesk = '0px',
  topMob = '0px',
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
      isPositionAbsolute={isPositionAbsolute}
      rightDesk={rightDesk}
      rightMob={rightMob}
      topDesk={topDesk}
      topMob={topMob}
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
