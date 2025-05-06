import { FC, useEffect, useState } from 'react';
import { Container, StyledHeader } from './Header.styled';
import { langs, theme } from '@/constants';
import { makeBlur } from '@/utils';
import {
  AnchorClickEvent,
  BtnClickEvent,
  InputChangeEvent,
} from '@/types/types';
// ----- components
import HeaderNavMenu from '@GeneralComponents/HeaderNavMenu';
import HeaderContactsInfo from '@GeneralComponents/HeaderContactsInfo';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedMenuModalWin from '@AnimatedGeneralComponents/AnimatedMenuModalWin';

const Header: FC = () => {
  const [currentLang, setCurrentLang] = useState<string>(() => langs.ua.name);
  const [showMenuModalWin, setShowMenuModalWin] = useState<boolean>(false);
  const [shouldHideMenuBtn, setShouldHideMenuBtn] = useState<boolean>(false);

  useEffect(() => {
    if (shouldHideMenuBtn && !showMenuModalWin) {
      setShouldHideMenuBtn(false);
    }
  }, [shouldHideMenuBtn, showMenuModalWin]);

  const onLangRadioBtnChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);

    setCurrentLang(e.currentTarget.value);
  };

  const toggleShowMenuModalWin = () => {
    setShowMenuModalWin((prevState) => !prevState);
  };

  const onPageLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowMenuModalWin();
  };

  const changeShouldHideMenuBtn = (value: boolean) => {
    setShouldHideMenuBtn(value);
  };

  const onMenuBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowMenuModalWin();
  };

  return (
    <>
      <StyledHeader showMenuModalWin={showMenuModalWin}>
        <GeneralContainer isPositionRelative>
          <Container>
            <HeaderNavMenu
              showMenuModalWin={showMenuModalWin}
              shouldHideMenuBtn={shouldHideMenuBtn}
              onMenuBtnClick={onMenuBtnClick}
            />
            <HeaderContactsInfo
              currentLang={currentLang}
              showMenuModalWin={showMenuModalWin}
              shouldHideMenuBtn={shouldHideMenuBtn}
              onLangRadioBtnChange={onLangRadioBtnChange}
              onMenuBtnClick={onMenuBtnClick}
            />
          </Container>
        </GeneralContainer>
      </StyledHeader>
      <AnimatedMenuModalWin
        currentLang={currentLang}
        onChange={onLangRadioBtnChange}
        onClick={onPageLinkClick}
        setModalWinState={toggleShowMenuModalWin}
        showModalWin={showMenuModalWin}
        backgroundColor={theme.colors.darkBg}
        changeShouldHideMenuBtn={changeShouldHideMenuBtn}
      />
    </>
  );
};

export default Header;
