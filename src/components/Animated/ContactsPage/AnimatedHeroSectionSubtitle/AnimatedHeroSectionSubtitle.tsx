import { FC, useRef } from 'react';
import {
  Container,
  Element,
  Subtitle,
} from './AnimatedHeroSectionSubtitle.styled';
import { Transition, useInView, VariantLabels, Variants } from 'framer-motion';
import { IProps } from './AnimatedHeroSectionSubtitle.types';

const AnimatedHeroSectionSubtitle: FC<IProps> = ({ animationDuration }) => {
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
      y: 50,
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
        <Subtitle>
          Зв'яжіться з нами, щоб поділитися ідеєю або запропонувати партнерство.
          Ми готові надати пораду та обговорити будь-які питання.
        </Subtitle>
      </Element>
    </Container>
  );
};

export default AnimatedHeroSectionSubtitle;
