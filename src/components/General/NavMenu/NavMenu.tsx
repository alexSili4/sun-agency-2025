import { FC } from 'react';
import { Container } from './NavMenu.styled';
import { IProps } from './NavMenu.types';
// ----- components
import SunLogoLink from '@GeneralComponents/SunLogoLink';
import MenuBtn from '@GeneralComponents/MenuBtn';

const NavMenu: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onMenuBtnClick,
}) => {
  return (
    <Container>
      <SunLogoLink showMenuModalWin={showMenuModalWin} />
      <MenuBtn
        showMenuModalWin={showMenuModalWin}
        shouldHideMenuBtn={shouldHideMenuBtn}
        onClick={onMenuBtnClick}
        isDeskMenuBtn
      />
    </Container>
  );
};

export default NavMenu;
