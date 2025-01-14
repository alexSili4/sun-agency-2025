import { FC } from 'react';
import { Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
import { IProps } from './ProjectsSection.types';
import { SectionsIds } from '@/constants';

const ProjectsSection: FC<IProps> = ({
  containerInView,
  containerRef,
  inView,
  sectionBgRef,
  shouldShowSectionBg,
}) => {
  return (
    <Section id={SectionsIds.projects}>
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
