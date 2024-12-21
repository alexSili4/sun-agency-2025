import { FC, useState } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { theme } from '@/constants';
import { MenuBtn } from './Menu.styled';
import AnimatedMenuModalWin from '@AnimationBlocks/AnimatedMenuModalWin';
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Cross as Hamburger } from 'hamburger-react';

const Menu: FC = () => {
  const [showMenuModalWin, setShowMenuModalWin] = useState<boolean>(false);

  const toggleShowMenuModalWin = () => {
    setShowMenuModalWin((prevState) => !prevState);
  };

  const onMenuBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowMenuModalWin();
  };

  const onPageLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowMenuModalWin();
  };

  return (
    <>
      <GlowingContainer borderRadius='50%' zIndex={theme.zIndex.menuBtn}>
        <MenuBtn type='button' onClick={onMenuBtnClick}>
          <Hamburger
            toggled={showMenuModalWin}
            color={theme.colors.white}
            size={theme.iconSizes.menuBtn}
          />
        </MenuBtn>
      </GlowingContainer>
      <AnimatedMenuModalWin
        onClick={onPageLinkClick}
        setModalWin={toggleShowMenuModalWin}
        showModalWin={showMenuModalWin}
        backgroundColor={theme.colors.body}
      />
    </>
  );
};

export default Menu;
