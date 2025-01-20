import { FC } from 'react';
import { theme } from '@/constants';
import { Button } from './MenuBtn.styled';
import { Cross as Hamburger } from 'hamburger-react';
import { IProps } from './MenuBtn.types';
import glowingRoundBtn from '@/lottiefiles/glowing-round-btn.json';
import LottieGlowingAnimation from '@GeneralComponents/LottieGlowingAnimation';
import { useIsHoverOrFocus } from '@/hooks';

const MenuBtn: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onMenuBtnClick,
}) => {
  const { isHoverOrFocus, onItemBlur, onItemFocus } = useIsHoverOrFocus();

  return (
    <Button
      type='button'
      onClick={onMenuBtnClick}
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
