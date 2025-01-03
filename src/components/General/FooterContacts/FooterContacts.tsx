import { FC } from 'react';
import GlowingLink from '@GeneralComponents/GlowingLink';
import { Container, Title } from './FooterContacts.styled';

const FooterContacts: FC = () => {
  return (
    <Container>
      <Title>Маєте цікавий проект? Ми будемо раді почути про нього</Title>
      <GlowingLink width={200} title='Напишіть нам' />
    </Container>
  );
};

export default FooterContacts;
