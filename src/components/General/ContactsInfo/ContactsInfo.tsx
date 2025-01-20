import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@GeneralComponents/LangsMenu';
import { IProps } from './ContactsInfo.types';
import GlowingLink from '@GeneralComponents/GlowingLink';
import { PagePaths } from '@/constants';

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
      />
    </Container>
  );
};

export default ContactsInfo;
