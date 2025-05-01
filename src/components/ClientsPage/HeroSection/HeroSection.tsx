import { FC } from 'react';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';
import AnimatedHeroSectionTitle from '@AnimatedClientsPageComponents/AnimatedHeroSectionTitle';
import { Section, Container } from './HeroSection.styled';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ animationDuration }) => {
  return (
    <Section>
      <HiddenPageTitle title='Клієнти' />
      <GeneralContainer>
        <Container>
          <Breadcrumbs />
          <AnimatedHeroSectionTitle animationDuration={animationDuration} />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;
