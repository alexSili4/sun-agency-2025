import { FC } from 'react';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Section, Container, Content } from './HeroSection.styled';
import AnimatedHeroSectionContacts from '@AnimatedContactsPageComponents/AnimatedHeroSectionContacts';
import HeroSectionTitle from '@ContactsPageComponents/HeroSectionTitle';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ animationDuration }) => {
  return (
    <Section>
      <HiddenPageTitle title='Контакти' />
      <GeneralContainer>
        <Container>
          <Breadcrumbs />
          <Content>
            <HeroSectionTitle animationDuration={animationDuration} />
            <AnimatedHeroSectionContacts
              animationDuration={animationDuration}
            />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
