import { FC } from 'react';
import { Container } from './ProjectsSectionContent.styled';
import { projects } from '@/constants';
import { IProps } from './ProjectsSectionContent.types';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedProjectsList from '@AnimatedMainPageComponents/AnimatedProjectsList';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import AnimatedProjectsSectionBg from '@AnimatedMainPageComponents/AnimatedProjectsSectionBg';
import AnimatedProjectsSectionGlowingLink from '@AnimatedMainPageComponents/AnimatedProjectsSectionGlowingLink';
import AnimatedProjectsSectionTitle from '@AnimatedMainPageComponents/AnimatedProjectsSectionTitle';

const ProjectsSectionContent: FC<IProps> = ({
  nextSectionInView,
  sectionBgInView,
  sectionBgRef,
}) => {
  return (
    <>
      <Container>
        <GeneralContainer isFullHeight isPositionRelative>
          <AnimatedProjectsSectionBg
            nextSectionInView={nextSectionInView}
            inView={sectionBgInView}
            sectionBgRef={sectionBgRef}
          />
          <ProjectsSectionContentWrap>
            <AnimatedProjectsSectionTitle inView={!nextSectionInView} />
            <AnimatedProjectsSectionGlowingLink
              nextSectionInView={nextSectionInView}
              isHiddenOnMobile
            />
          </ProjectsSectionContentWrap>
        </GeneralContainer>
      </Container>
      <GeneralContainer isPositionRelative isPointerEventsNone>
        <AnimatedProjectsList
          projects={projects}
          nextSectionInView={nextSectionInView}
        />
      </GeneralContainer>
    </>
  );
};

export default ProjectsSectionContent;
