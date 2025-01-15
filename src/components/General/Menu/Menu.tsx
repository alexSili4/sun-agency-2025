import { FC } from 'react';
import GlowingContainer from '@GeneralComponents/GlowingContainer';
import { theme } from '@/constants';
import { MenuBtn } from './Menu.styled';
import { Cross as Hamburger } from 'hamburger-react';
import { IProps } from './Menu.types';

const Menu: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onMenuBtnClick,
}) => {
  return (
    <>
      <GlowingContainer
        borderRadius='50%'
        zIndex={theme.zIndex.menuBtn}
        shouldHide={shouldHideMenuBtn}
      >
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
    </>
  );
};

export default Menu;
