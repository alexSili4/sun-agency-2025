import GeneralContainer from '@/components/General/GeneralContainer';
import { FC } from 'react';
import HeroSectionAboutUs from '@AboutPageComponents/HeroSectionAboutUs';
import { Section, Container, Content } from './HeroSection.styled';
import HeroSectionTitle from '@AboutPageComponents/HeroSectionTitle';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';

const HeroSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <Breadcrumbs />
          <Content>
            <HeroSectionTitle />
            <HeroSectionAboutUs />
          </Content>
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
