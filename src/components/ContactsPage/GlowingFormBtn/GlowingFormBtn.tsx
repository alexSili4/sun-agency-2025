import { FC } from 'react';
import { Title, Button } from './GlowingFormBtn.styled';
import { IProps } from './GlowingFormBtn.types';
import { useContactsGlowingElementSize, useIsHoverOrFocus } from '@/hooks';
import glowingContactBtn from '@/lottiefiles/glow/glowing-contact-link.json';
// ----- components
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';

const GlowingFormBtn: FC<IProps> = ({ title, disabled }) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();
  const {
    glowingElementGlowHeight,
    glowingElementGlowWidth,
    glowingElementWidth,
  } = useContactsGlowingElementSize();

  return (
    <Button
      type='submit'
      width={glowingElementWidth}
      onBlur={onItemBlur}
      onFocus={onItemFocus}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
      disabled={disabled}
    >
      <LottieGlowingAnimation
        animationData={glowingContactBtn}
        isHoverOrFocus={isHoverOrFocus}
        height={glowingElementGlowHeight}
        width={glowingElementGlowWidth}
        loop
      />
      <Title>{title}</Title>
    </Button>
  );
};

export default GlowingFormBtn;
