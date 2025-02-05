import { FC } from 'react';
import { Container } from './HeaderContactsInfo.styled';
import { IProps } from './HeaderContactsInfo.types';
import glowingContactBtn from '@/lottiefiles/glow/glowing-contact-link.json';
import { PagePaths } from '@/constants';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';
import HeaderLangsMenu from '@GeneralComponents/HeaderLangsMenu';
import HeaderMenuBtn from '@GeneralComponents/HeaderMenuBtn';
import { useIsDesk } from '@/hooks';

const HeaderContactsInfo: FC<IProps> = ({
  currentLang,
  showMenuModalWin,
  shouldHideMenuBtn,
  onLangRadioBtnChange,
  onMenuBtnClick,
}) => {
  const isDesk = useIsDesk();

  const glowingLinkWidth = isDesk ? 130 : 102;
  const glowingLinkGlowWidth = glowingLinkWidth + 18;

  return (
    <Container showMenuModalWin={showMenuModalWin}>
      <HeaderLangsMenu
        currentLang={currentLang}
        onChange={onLangRadioBtnChange}
        isHidden={showMenuModalWin}
        isHiddenOnMobile
      />
      <GlowingLink
        width={glowingLinkWidth}
        title='Контакт'
        href={PagePaths.contacts}
        animationData={glowingContactBtn}
        glowHeight={71}
        glowWidth={glowingLinkGlowWidth}
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
