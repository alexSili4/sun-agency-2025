import { FC } from 'react';
import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';
import { Section } from './HeroSection.styled';

const HeroSection: FC = () => {
  return (
    <Section>
      <HeroSectionTitle />
    </Section>
  );
};

export default HeroSection;
