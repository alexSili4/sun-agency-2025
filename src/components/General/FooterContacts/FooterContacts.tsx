import { FC } from 'react';
import GlowingContactsLink from '@GeneralComponents/GlowingContactsLink';
import { Container, Title } from './FooterContacts.styled';

const FooterContacts: FC = () => {
  return (
    <Container>
      <Title>Маєте цікавий проект? Ми будемо раді почути про нього</Title>
      <GlowingContactsLink width={200} title='Напишіть нам' />
    </Container>
  );
};

export default FooterContacts;
