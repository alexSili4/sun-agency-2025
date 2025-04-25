import { FC } from 'react';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Section, Container, Content } from './HeroSection.styled';
import HeroSectionContacts from '@ContactsPageComponents/HeroSectionContacts';
import HeroSectionTitle from '@ContactsPageComponents/HeroSectionTitle';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';

const HeroSection: FC = () => {
  return (
    <Section>
      <HiddenPageTitle title='Контакти' />
      <GeneralContainer>
        <Container>
          <Breadcrumbs />
          <Content>
            <HeroSectionTitle />
            <HeroSectionContacts />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
