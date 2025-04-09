import { FC } from 'react';
import sectionBg from '@/images/main/clients/section-bg.jpg';
import { Container, Image } from './AnimatedClientsSectionBg.styled';
import { IProps } from './AnimatedClientsSectionBg.types';

const AnimatedClientsSectionBg: FC<IProps> = ({ shouldShow }) => {
  const animate = shouldShow ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const itemVariants = {
    hidden: {
      y: '100%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <Image src={sectionBg} alt='' variants={itemVariants} />
    </Container>
  );
};

export default AnimatedClientsSectionBg;
