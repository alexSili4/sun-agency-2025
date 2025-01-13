import { FC } from 'react';
import ProjectsList from '@MainPageComponents/ProjectsList';
import SmoothFadeInElement from '@AnimationBlocks/SmoothFadeInElement';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import { IProps } from './AnimatedProjectsList.types';

const AnimatedProjectsList: FC<IProps> = ({
  projects,
  containerInView,
  containerRef,
  inView,
}) => {
  return (
    <SmoothFadeInElement
      isPositionAbsolute={false}
      elementRef={containerRef}
      shouldShow={containerInView}
      nextElementInView={inView}
    >
      <ProjectsSectionContentWrap isProjectsListWrap>
        <ProjectsList projects={projects} />
      </ProjectsSectionContentWrap>
    </SmoothFadeInElement>
  );
};

export default AnimatedProjectsList;
