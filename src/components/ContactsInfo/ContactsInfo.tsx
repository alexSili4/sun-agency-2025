import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@/components/LangsMenu';
import ContactMenu from '@/components/ContactMenu';

const ContactsInfo: FC = () => {
  return (
    <Container>
      <LangsMenu />
      <ContactMenu />
    </Container>
  );
};

export default ContactsInfo;
