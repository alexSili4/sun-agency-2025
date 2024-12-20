import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@GeneralComponents/LangsMenu';
import ContactsMenu from '@GeneralComponents/ContactsMenu';

const ContactsInfo: FC = () => {
  return (
    <Container>
      <LangsMenu />
      <ContactsMenu />
    </Container>
  );
};

export default ContactsInfo;
