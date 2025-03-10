import { FC } from 'react';
import { NexSectionBg, Section } from './ProjectsSection.styled';
import { IProps } from './ProjectsSection.types';
import { SectionsIds } from '@/constants';
import nexSectionBg from '@/images/main/projects/next-section-bg.png';
// ----- components
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';

const ProjectsSection: FC<IProps> = ({
  sectionBgInView,
  nextSectionInView,
  sectionBgRef,
  sectionRef,
}) => {
  return (
    <Section id={SectionsIds.projects} ref={sectionRef}>
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
