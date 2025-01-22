import { FC } from 'react';
import { NexSectionBg, Section } from './ProjectsSection.styled';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';
import { IProps } from './ProjectsSection.types';
import { SectionsIds } from '@/constants';
import nexSectionBg from '@/images/projects/next-section-bg.png';

const ProjectsSection: FC<IProps> = ({
  sectionBgInView,
  nextSectionInView,
  sectionBgRef,
}) => {
  return (
    <Section id={SectionsIds.projects}>
      <NexSectionBg src={nexSectionBg} />
      <ProjectsSectionContent
        nextSectionInView={nextSectionInView}
        sectionBgInView={sectionBgInView}
        sectionBgRef={sectionBgRef}
      />
    </Section>
  );
};

export default ProjectsSection;
