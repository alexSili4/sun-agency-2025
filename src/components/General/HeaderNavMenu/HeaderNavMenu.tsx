import { FC } from 'react';
import { Container } from './HeaderNavMenu.styled';
import { IProps } from './HeaderNavMenu.types';
// ----- components
import SunLogoLink from '@GeneralComponents/SunLogoLink';
import HeaderMenuBtn from '@GeneralComponents/HeaderMenuBtn';

const HeaderNavMenu: FC<IProps> = ({
  showMenuModalWin,
  shouldHideMenuBtn,
  onMenuBtnClick,
}) => {
  return (
    <Container>
      <SunLogoLink showMenuModalWin={showMenuModalWin} />
      <HeaderMenuBtn
        showMenuModalWin={showMenuModalWin}
        shouldHideMenuBtn={shouldHideMenuBtn}
        onClick={onMenuBtnClick}
        isDeskMenuBtn
      />
    </Container>
  );
};

export default HeaderNavMenu;
