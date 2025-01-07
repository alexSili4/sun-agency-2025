import { FC } from 'react';
import { Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
import { IProps } from './ProjectsSection.types';

const ProjectsSection: FC<IProps> = ({
  projectsSectionGradientRef,
  shouldShowGradient,
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
}) => {
  return (
    <Section>
      <ProjectsSectionContent
        shouldShowGradient={shouldShowGradient}
        projectsSectionGradientRef={projectsSectionGradientRef}
        projectsListContainerRef={projectsListContainerRef}
        projectsListContainerInView={projectsListContainerInView}
        servicesSectionInView={servicesSectionInView}
      />
    </Section>
  );
};

export default ProjectsSection;
