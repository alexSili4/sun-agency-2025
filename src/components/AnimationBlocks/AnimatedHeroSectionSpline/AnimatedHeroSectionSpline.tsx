import { FC } from 'react';
import {
  Container,
  Element,
  StyledSpline,
} from './AnimatedHeroSectionSpline.styled';
import { Scenes } from '@/constants';
import { IProps } from './AnimatedHeroSectionSpline.types';

const AnimatedHeroSectionSpline: FC<IProps> = ({ nextSectionInView }) => {
  const y = nextSectionInView ? '-100%' : '100%';

  const animate = !nextSectionInView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y, opacity: 0, scale: 0.5, transition },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition,
    },
  };

  return (
    <Container variants={containerVariants} initial='visible' animate={animate}>
      <Element variants={elementVariants}>
        <StyledSpline scene={Scenes.donationSection} />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionSpline;
