import { FC } from 'react';
import AnimatedHeroSectionTitle from '@AboutPageComponents/AnimatedHeroSectionTitle';
import { Container } from './HeroSectionTitle.styled';

const HeroSectionTitle: FC = () => {
  return (
    <Container>
      <AnimatedHeroSectionTitle />
      {/* TODO Fix SCENE */}
    </Container>
  );
};

export default HeroSectionTitle;
