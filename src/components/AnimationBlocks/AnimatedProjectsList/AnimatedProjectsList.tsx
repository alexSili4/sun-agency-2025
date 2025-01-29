import { FC } from 'react';
import { IProps } from './AnimatedProjectsList.types';
import { Container, Element } from './AnimatedProjectsList.styled';
// ----- components
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import ProjectsList from '@MainPageComponents/ProjectsList';

const AnimatedProjectsList: FC<IProps> = ({ projects, nextSectionInView }) => {
  const animate = !nextSectionInView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const transition = {
    duration: 2,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: {
      y: '-100%',
      transition,
    },
    visible: {
      y: 0,
      transition,
    },
  };

  return (
    <Container variants={containerVariants} initial='visible' animate={animate}>
      <Element variants={elementVariants}>
        <ProjectsSectionContentWrap isProjectsListWrap>
          <ProjectsList projects={projects} />
        </ProjectsSectionContentWrap>
      </Element>
    </Container>
  );
};

export default AnimatedProjectsList;
