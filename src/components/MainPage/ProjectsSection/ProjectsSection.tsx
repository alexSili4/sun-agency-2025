import { FC } from 'react';
import { Section } from './ProjectsSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ProjectsSectionContent from '@MainPageComponents/ProjectsSectionContent';

const ProjectsSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <ProjectsSectionContent />
      </GeneralContainer>
    </Section>
  );
};

export default ProjectsSection;
