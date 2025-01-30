import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import { IProps } from './ContactsInfo.types';
import glowingContactBtn from '@/lottiefiles/glow/glowing-contact-link.json';
import { PagePaths } from '@/constants';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';
import LangsMenu from '@GeneralComponents/LangsMenu';
import MenuBtn from '@GeneralComponents/MenuBtn';
import { useIsDesk } from '@/hooks';

const ContactsInfo: FC<IProps> = ({
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
      <LangsMenu
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
      <MenuBtn
        showMenuModalWin={showMenuModalWin}
        shouldHideMenuBtn={shouldHideMenuBtn}
        onClick={onMenuBtnClick}
        isMobileMenuBtn
      />
    </Container>
  );
};

export default ContactsInfo;
