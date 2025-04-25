import { FC } from 'react';
import AnimatedHeroSectionTitle from '@AboutPageComponents/AnimatedHeroSectionTitle';
import { Container } from './HeroSectionTitle.styled';

const HeroSectionTitle: FC = () => {
  return (
    <Container>
      <AnimatedHeroSectionTitle />
    </Container>
  );
};

export default HeroSectionTitle;
