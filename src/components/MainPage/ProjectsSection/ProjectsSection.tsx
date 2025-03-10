import { FC } from 'react';
import { NexSectionBgWrap, Section } from './ProjectsSection.styled';
import { IProps } from './ProjectsSection.types';
import { SectionsIds } from '@/constants';
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
      <NexSectionBgWrap></NexSectionBgWrap>
      <ProjectsSectionContent
        nextSectionInView={nextSectionInView}
        sectionBgInView={sectionBgInView}
        sectionBgRef={sectionBgRef}
      />
    </Section>
  );
};

export default ProjectsSection;
