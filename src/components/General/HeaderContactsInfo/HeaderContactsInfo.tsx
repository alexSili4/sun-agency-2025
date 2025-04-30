import { FC } from 'react';
import { Container } from './HeaderContactsInfo.styled';
import { IProps } from './HeaderContactsInfo.types';
import glowingContactBtn from '@/lottiefiles/glow/glowing-contact-link.json';
import { PagePaths } from '@/constants';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';
import HeaderLangsMenu from '@GeneralComponents/HeaderLangsMenu';
import HeaderMenuBtn from '@GeneralComponents/HeaderMenuBtn';
import { useContactsGlowingElementSize } from '@/hooks';

const HeaderContactsInfo: FC<IProps> = ({
  currentLang,
  showMenuModalWin,
  shouldHideMenuBtn,
  onLangRadioBtnChange,
  onMenuBtnClick,
}) => {
  const {
    glowingElementGlowHeight,
    glowingElementGlowWidth,
    glowingElementWidth,
  } = useContactsGlowingElementSize();

  return (
    <Container showMenuModalWin={showMenuModalWin}>
      <HeaderLangsMenu
        currentLang={currentLang}
        onChange={onLangRadioBtnChange}
        isHidden={showMenuModalWin}
        isHiddenOnMobile
      />
      <GlowingLink
        width={glowingElementWidth}
        title='Контакт'
        href={PagePaths.contacts}
        animationData={glowingContactBtn}
        glowHeight={glowingElementGlowHeight}
        glowWidth={glowingElementGlowWidth}
        isHidden={showMenuModalWin}
        loop
      />
      <HeaderMenuBtn
        showMenuModalWin={showMenuModalWin}
        shouldHideMenuBtn={shouldHideMenuBtn}
        onClick={onMenuBtnClick}
        isMobileMenuBtn
      />
    </Container>
  );
};

export default HeaderContactsInfo;
