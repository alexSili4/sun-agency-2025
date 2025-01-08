import { FC } from 'react';
import ProjectsList from '@MainPageComponents/ProjectsList';
import SmoothFadeInElement from '@AnimationBlocks/SmoothFadeInElement';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import { IProps } from './AnimatedProjectsList.types';

const AnimatedProjectsList: FC<IProps> = ({
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
  projects,
}) => {
  return (
    <SmoothFadeInElement
      isPositionAbsolute={false}
      elementRef={projectsListContainerRef}
      shouldShow={projectsListContainerInView}
      nextElementInView={servicesSectionInView}
    >
      <ProjectsSectionContentWrap isProjectsListWrap>
        <ProjectsList projects={projects} />
      </ProjectsSectionContentWrap>
    </SmoothFadeInElement>
  );
};

export default AnimatedProjectsList;
