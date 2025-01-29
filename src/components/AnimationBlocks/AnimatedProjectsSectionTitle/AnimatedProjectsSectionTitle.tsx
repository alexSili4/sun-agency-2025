import { FC } from 'react';
import { IProps } from './AnimatedProjectsSectionTitle.types';
import { Container, Element } from './AnimatedProjectsSectionTitle.styled';
// ----- components
import SectionGeneralTitle from '@MainPageComponents/SectionGeneralTitle';

const AnimatedProjectsSectionTitle: FC<IProps> = ({ nextSectionInView }) => {
  const animate = !nextSectionInView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: -50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <Container variants={containerVariants} initial='visible' animate={animate}>
      <Element variants={elementVariants}>
        <SectionGeneralTitle title='Кейси' subtitle='Проекти 2022-2024 років' />
      </Element>
    </Container>
  );
};

export default AnimatedProjectsSectionTitle;
