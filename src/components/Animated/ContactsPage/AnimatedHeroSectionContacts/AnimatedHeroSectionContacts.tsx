import { FC, useRef } from 'react';
import HeroSectionContacts from '@ContactsPageComponents/HeroSectionContacts';
import { Container, Element } from './AnimatedHeroSectionContacts.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedHeroSectionContacts.types';

const AnimatedHeroSectionContacts: FC<IProps> = ({ animationDuration }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  const animate: VariantLabels = inView ? 'visible' : 'hidden';

  const containerVariants: Variants = {
    hidden: {},
    visible: {},
  };

  const transition: Transition = {
    duration: animationDuration,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container
      ref={containerRef}
      animate={animate}
      variants={containerVariants}
      initial='hidden'
    >
      <Element variants={elementVariants}>
        <HeroSectionContacts />
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionContacts;
