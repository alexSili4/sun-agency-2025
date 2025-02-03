import { FC } from 'react';
import { Container } from './ProjectsSectionContent.styled';
import { projects } from '@/constants';
import { IProps } from './ProjectsSectionContent.types';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedProjectsList from '@AnimationBlocks/AnimatedProjectsList';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import AnimatedProjectsSectionBg from '@AnimationBlocks/AnimatedProjectsSectionBg';
import AnimatedProjectsSectionGlowingLink from '@AnimationBlocks/AnimatedProjectsSectionGlowingLink';
import AnimatedProjectsSectionTitle from '@AnimationBlocks/AnimatedProjectsSectionTitle';

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
            <AnimatedProjectsSectionTitle
              nextSectionInView={nextSectionInView}
            />
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
