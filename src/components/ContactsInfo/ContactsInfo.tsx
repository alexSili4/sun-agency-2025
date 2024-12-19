import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@/components/LangsMenu';
import ContactsMenu from '@/components/ContactsMenu';

const ContactsInfo: FC = () => {
  return (
    <Container>
      <LangsMenu />
      <ContactsMenu />
    </Container>
  );
};

export default ContactsInfo;
