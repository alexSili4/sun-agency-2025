import { FC } from 'react';
import { theme } from '@/constants';
import { Button } from './HeaderMenuBtn.styled';
import { Cross as Hamburger } from 'hamburger-react';
import { IProps } from './HeaderMenuBtn.types';
import glowingRoundBtn from '@/lottiefiles/glow/glowing-round-btn.json';
import { useIsHoverOrFocus } from '@/hooks';
// ----- components
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';

const HeaderMenuBtn: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onClick,
  isMobileMenuBtn = false,
  isDeskMenuBtn = false,
}) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <Button
      type='button'
      onClick={onClick}
      shouldHide={shouldHideMenuBtn}
      isDeskMenuBtn={isDeskMenuBtn}
      isMobileMenuBtn={isMobileMenuBtn}
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
        isHidden={isMobileMenuBtn}
      />
      <Hamburger
        toggled={showMenuModalWin}
        color={theme.colors.white}
        size={theme.iconSizes.menuBtn}
      />
    </Button>
  );
};

export default HeaderMenuBtn;
