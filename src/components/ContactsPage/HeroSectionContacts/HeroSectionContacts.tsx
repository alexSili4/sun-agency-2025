import { FC } from 'react';
import { Container } from './HeroSectionContacts.styled';
import HeroSectionContactsInfo from '@ContactsPageComponents/HeroSectionContactsInfo';
import HeroSectionContactsForm from '@ContactsPageComponents/HeroSectionContactsForm';

const HeroSectionContacts: FC = () => {
  return (
    <Container>
      <HeroSectionContactsInfo />
      <HeroSectionContactsForm />
    </Container>
  );
};

export default HeroSectionContacts;
