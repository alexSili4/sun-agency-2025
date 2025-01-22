import { FC } from 'react';
import { theme } from '@/constants';
import { Button } from './MenuBtn.styled';
import { Cross as Hamburger } from 'hamburger-react';
import { IProps } from './MenuBtn.types';
import glowingRoundBtn from '@/lottiefiles/glow/glowing-round-btn.json';
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';
import { useIsHoverOrFocus } from '@/hooks';

const MenuBtn: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onClick,
}) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <Button
      type='button'
      onClick={onClick}
      shouldHide={shouldHideMenuBtn}
      onMouseEnter={onItemFocus}
      onMouseLeave={onItemBlur}
      onBlur={onItemBlur}
      onFocus={onItemFocus}
    >
      <LottieGlowingAnimation
        animationData={glowingRoundBtn}
        isHoverOrFocus={isHoverOrFocus}
        height={70}
        width={70}
      />
      <Hamburger
        toggled={showMenuModalWin}
        color={theme.colors.white}
        size={theme.iconSizes.menuBtn}
      />
    </Button>
  );
};

export default MenuBtn;
