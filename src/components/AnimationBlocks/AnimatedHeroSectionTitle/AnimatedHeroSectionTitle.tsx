import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';
import { FC } from 'react';
import { Container, Element } from './AnimatedHeroSectionTitle.styled';
import { IProps } from './AnimatedHeroSectionTitle.types';

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
