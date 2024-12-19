import { FC } from 'react';
import { Container } from './ContactsInfo.styled';
import LangsMenu from '@GeneralComponents/LangsMenu';
import ContactsMenu from '@GeneralComponents/ContactsMenu';
import { Langs } from '@/constants';

const ContactsInfo: FC = () => {
  const langs = Object.values(Langs);

  return (
    <Container>
      <LangsMenu langs={langs} />
      <ContactsMenu />
    </Container>
  );
};

export default ContactsInfo;
