import { FC } from 'react';
import { Container } from './ProjectsSectionContent.styled';
import GlowingLink from '@GeneralComponents/GlowingLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { PagePaths } from '@/constants';
import { projects } from '@/constants';
import { IProps } from './ProjectsSectionContent.types';
import AnimatedProjectsList from '@AnimationBlocks/AnimatedProjectsList';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import AnimatedProjectsSectionBg from '@AnimationBlocks/AnimatedProjectsSectionBg';
import SectionGeneralTitle from '@MainPageComponents/SectionGeneralTitle';

const ProjectsSectionContent: FC<IProps> = ({
  shouldShowSectionBg,
  containerInView,
  containerRef,
  inView,
  sectionBgRef,
}) => {
  return (
    <>
      <Container>
        <GeneralContainer isFullHeight isPositionRelative>
          <AnimatedProjectsSectionBg
            sectionBgRef={sectionBgRef}
            inView={inView}
            shouldShowSectionBg={shouldShowSectionBg}
          />
          <ProjectsSectionContentWrap>
            <SectionGeneralTitle
              title='Кейси'
              subtitle='Проекти 2022-2024 років'
            />
            <GlowingLink
              width={200}
              title='Більше робіт'
              href={PagePaths.projects}
              isSubduedLighting
            />
          </ProjectsSectionContentWrap>
        </GeneralContainer>
      </Container>
      <GeneralContainer>
        <AnimatedProjectsList
          projects={projects}
          containerInView={containerInView}
          containerRef={containerRef}
          inView={inView}
        />
      </GeneralContainer>
    </>
  );
};

export default ProjectsSectionContent;
