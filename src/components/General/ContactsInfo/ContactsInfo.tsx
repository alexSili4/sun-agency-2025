import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import { IProps } from './ContactsInfo.types';
import glowingContactBtn from '@/lottiefiles/glow/glowing-contact-link.json';
import { PagePaths } from '@/constants';
// ----- components
import GlowingLink from '@GeneralComponents/GlowingLink';
import LangsMenu from '@GeneralComponents/LangsMenu';

const ContactsInfo: FC<IProps> = ({
  currentLang,
  onChange,
  showMenuModalWin,
}) => {
  return (
    <Container showMenuModalWin={showMenuModalWin}>
      <LangsMenu currentLang={currentLang} onChange={onChange} />
      <GlowingLink
        width={130}
        title='Контакт'
        href={PagePaths.contacts}
        animationData={glowingContactBtn}
        glowHeight={71}
        glowWidth={148}
        loop
      />
    </Container>
  );
};

export default ContactsInfo;
