import { FC } from 'react';
import sectionBg from '@/images/main/projects/section-bg.png';
import { Container, Element, Image } from './AnimatedProjectsSectionBg.styled';
import { IProps } from './AnimatedProjectsSectionBg.types';

const AnimatedProjectsSectionBg: FC<IProps> = ({
  nextSectionInView,
  inView,
  sectionBgRef,
}) => {
  const animate = inView ? 'visible' : 'hidden';
  const y = nextSectionInView ? -200 : 200;

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: {
      y,
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
      ref={sectionBgRef}
      variants={containerVariants}
      initial='hidden'
      animate={animate}
    >
      <Element variants={elementVariants}>
        <Image src={sectionBg} alt='' />
      </Element>
    </Container>
  );
};

export default AnimatedProjectsSectionBg;
