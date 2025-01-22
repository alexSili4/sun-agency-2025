import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';
import { FC } from 'react';
import { Container, Element } from './AnimatedHeroSectionTitle.styled';
import { IProps } from './AnimatedHeroSectionTitle.types';
import { useScroll, useTransform } from 'framer-motion';

const AnimatedHeroSectionTitle: FC<IProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end start', 'start end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  return (
    <Container>
      <Element style={{ scale }}>
        <HeroSectionTitle />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionTitle;
