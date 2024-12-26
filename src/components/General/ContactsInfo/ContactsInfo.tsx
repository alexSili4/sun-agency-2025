import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@GeneralComponents/LangsMenu';
import { IProps } from './ContactsInfo.types';
import GlowingContactsLink from '@GeneralComponents/GlowingContactsLink';

const ContactsInfo: FC<IProps> = ({ currentLang, onChange }) => {
  return (
    <Container>
      <LangsMenu currentLang={currentLang} onChange={onChange} />
      <GlowingContactsLink width={130} title='Контакт' />
    </Container>
  );
};

export default ContactsInfo;
