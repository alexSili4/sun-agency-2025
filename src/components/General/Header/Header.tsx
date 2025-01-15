import { FC, useEffect, useState } from 'react';
import { Container, StyledHeader } from './Header.styled';
import NavMenu from '@GeneralComponents/NavMenu';
import ContactsInfo from '@GeneralComponents/ContactsInfo';
import { Langs, theme } from '@/constants';
import { makeBlur } from '@/utils';
import {
  AnchorClickEvent,
  BtnClickEvent,
  InputChangeEvent,
} from '@/types/types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedMenuModalWin from '@AnimationBlocks/AnimatedMenuModalWin';

const Header: FC = () => {
  const [currentLang, setCurrentLang] = useState<string>(() => Langs.ua);
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
            <NavMenu
              showMenuModalWin={showMenuModalWin}
              shouldHideMenuBtn={shouldHideMenuBtn}
              onMenuBtnClick={onMenuBtnClick}
            />
            <ContactsInfo
              currentLang={currentLang}
              onChange={onLangRadioBtnChange}
              showMenuModalWin={showMenuModalWin}
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
