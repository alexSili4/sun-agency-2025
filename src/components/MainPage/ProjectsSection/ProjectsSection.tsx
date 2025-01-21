import { FC } from 'react';
import { Container, NexSectionBg, Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
import { IProps } from './ProjectsSection.types';
import { SectionsIds } from '@/constants';
import nexSectionBg from '@/images/projects/next-section-bg.png';

const ProjectsSection: FC<IProps> = ({
  containerInView,
  containerRef,
  inView,
  sectionBgRef,
  shouldShowSectionBg,
}) => {
  return (
    <Section id={SectionsIds.projects}>
      <NexSectionBg src={nexSectionBg} />
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
