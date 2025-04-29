import { FC } from 'react';
import { Container, Content } from './HeroSectionContacts.styled';
import HeroSectionContactsInfo from '@ContactsPageComponents/HeroSectionContactsInfo';
import HeroSectionContactsForm from '@ContactsPageComponents/HeroSectionContactsForm';

const HeroSectionContacts: FC = () => {
  return (
    <Container>
      <Content>
        <HeroSectionContactsInfo />
        <HeroSectionContactsForm />
      </Content>
    </Container>
  );
};

export default HeroSectionContacts;
