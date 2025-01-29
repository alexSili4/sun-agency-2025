import { FC } from 'react';
import { Container, Element } from './AnimatedHeroSectionTitle.styled';
import { IProps } from './AnimatedHeroSectionTitle.types';
// ----- components
import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';

const AnimatedHeroSectionTitle: FC<IProps> = ({ scale }) => {
  return (
    <Container>
      <Element style={{ scale }}>
        <HeroSectionTitle />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionTitle;
