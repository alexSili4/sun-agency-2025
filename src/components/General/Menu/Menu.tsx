import { FC, useState } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { theme } from '@/constants';
import { MenuBtn } from './Menu.styled';
import AnimatedMenuModalWin from '@AnimationBlocks/AnimatedMenuModalWin';
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Cross as Hamburger } from 'hamburger-react';
import { IProps } from './Menu.types';

const Menu: FC<IProps> = ({ currentLang, onChange }) => {
  const [showMenuModalWin, setShowMenuModalWin] = useState<boolean>(false);
  const [shouldHideMenuBtn, setShouldHideMenuBtn] = useState<boolean>(false);
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

  const changeShouldHideMenuBtn = (value: boolean) => {
    setShouldHideMenuBtn(value);
  };

  return (
    <>
      <GlowingContainer borderRadius='50%' zIndex={theme.zIndex.menuBtn}>
        <MenuBtn
          type='button'
          onClick={onMenuBtnClick}
          shouldHide={shouldHideMenuBtn}
        >
          <Hamburger
            toggled={showMenuModalWin}
            color={theme.colors.white}
            size={theme.iconSizes.menuBtn}
          />
        </MenuBtn>
      </GlowingContainer>
      <AnimatedMenuModalWin
        currentLang={currentLang}
        onChange={onChange}
        onClick={onPageLinkClick}
        setModalWin={toggleShowMenuModalWin}
        showModalWin={showMenuModalWin}
        backgroundColor={theme.colors.body}
      />
    </>
  );
};

export default Menu;
