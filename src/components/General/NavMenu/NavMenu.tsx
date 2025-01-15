import { FC } from 'react';
import { Container } from './NavMenu.styled';
import Menu from '@GeneralComponents/Menu';
import { IProps } from './NavMenu.types';
import SunLogoLink from '@GeneralComponents/SunLogoLink';

const NavMenu: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onMenuBtnClick,
}) => {
  return (
    <Container>
      <SunLogoLink showMenuModalWin={showMenuModalWin} />
      <Menu
        showMenuModalWin={showMenuModalWin}
        shouldHideMenuBtn={shouldHideMenuBtn}
        onMenuBtnClick={onMenuBtnClick}
      />
    </Container>
  );
};

export default NavMenu;
