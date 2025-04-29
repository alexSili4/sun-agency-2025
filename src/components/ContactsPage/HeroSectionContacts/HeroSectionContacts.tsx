import { FC } from 'react';
import { Container, Content } from './HeroSectionContacts.styled';
import HeroSectionContactsInfo from '@ContactsPageComponents/HeroSectionContactsInfo';
import HeroSectionContactsFormContainer from '@ContactsPageComponents/HeroSectionContactsFormContainer';
import { contacts } from '@/constants';

const HeroSectionContacts: FC = () => {
  const { info, services } = contacts;
  const {
    address: { link: addressLink, text: addressText },
    email,
    phone,
  } = info;
  const contactLength = Object.keys(info).length;

  return (
    <Container>
      <Content>
        <HeroSectionContactsInfo
          addressLink={addressLink}
          addressText={addressText}
          contactLength={contactLength}
          email={email}
          phone={phone}
        />
        <HeroSectionContactsFormContainer services={services} />
      </Content>
    </Container>
  );
};

export default HeroSectionContacts;
