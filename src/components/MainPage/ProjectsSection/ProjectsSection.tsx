import { FC } from 'react';
import { Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
import { IProps } from './ProjectsSection.types';

const ProjectsSection: FC<IProps> = ({
  containerInView,
  containerRef,
  inView,
  sectionBgRef,
  shouldShowSectionBg,
}) => {
  return (
    <Section>
      <ProjectsSectionContent
        shouldShowSectionBg={shouldShowSectionBg}
        sectionBgRef={sectionBgRef}
        containerRef={containerRef}
        containerInView={containerInView}
        inView={inView}
      />
    </Section>
  );
};

export default ProjectsSection;
