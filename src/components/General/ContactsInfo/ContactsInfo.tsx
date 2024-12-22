import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@GeneralComponents/LangsMenu';
import ContactsMenu from '@GeneralComponents/ContactsMenu';
import { IProps } from './ContactsInfo.types';

const ContactsInfo: FC<IProps> = ({ currentLang, onChange }) => {
  return (
    <Container>
      <LangsMenu currentLang={currentLang} onChange={onChange} />
      <ContactsMenu />
    </Container>
  );
};

export default ContactsInfo;
