import GeneralContainer from '@/components/General/GeneralContainer';
import { FC } from 'react';
import HeroSectionAboutUs from '@AboutPageComponents/HeroSectionAboutUs';
import { Section, Container, Content, Background } from './HeroSection.styled';
import HeroSectionTitle from '@AboutPageComponents/HeroSectionTitle';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ metrics }) => {
  return (
    <Section>
      <Background>
        <GeneralContainer>
          <Container>
            <Breadcrumbs />
            <Content>
              <HeroSectionTitle />
              <HeroSectionAboutUs metrics={metrics} />
            </Content>
          </Container>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default HeroSection;
