import { FC } from 'react';
import sectionBg from '@/images/clients/section-bg.jpg';
import { Container, Image } from './AnimatedClientsSectionBg.styled';
import { IProps } from './AnimatedClientsSectionBg.types';

const AnimatedClientsSectionBg: FC<IProps> = ({ shouldShow }) => {
  const animate = shouldShow ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const itemVariants = {
    hidden: {
      y: '100%',
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Container variants={containerVariants} initial='hidden' animate={animate}>
      <Image src={sectionBg} variants={itemVariants} />
    </Container>
  );
};

export default AnimatedClientsSectionBg;
