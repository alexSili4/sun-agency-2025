import { FC } from 'react';
import SectionTitle from '@GeneralComponents/SectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import { Container, TextWrap } from './ProjectsSectionContent.styled';
import GlowingLink from '@GeneralComponents/GlowingLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { PagePaths } from '@/constants';
import { projects } from '@/constants';
import { IProps } from './ProjectsSectionContent.types';
import AnimatedProjectsList from '@AnimationBlocks/AnimatedProjectsList';
import ProjectsSectionContentWrap from '@MainPageComponents/ProjectsSectionContentWrap';
import AnimatedProjectsSectionGradient from '@AnimationBlocks/AnimatedProjectsSectionGradient';

const ProjectsSectionContent: FC<IProps> = ({
  shouldShowGradient,
  projectsSectionGradientRef,
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
}) => {
  return (
    <>
      <Container>
        <GeneralContainer isFullHeight isPositionRelative>
          <AnimatedProjectsSectionGradient
            projectsSectionGradientRef={projectsSectionGradientRef}
            servicesSectionInView={servicesSectionInView}
            shouldShowGradient={shouldShowGradient}
          />
          <ProjectsSectionContentWrap>
            <TextWrap>
              <SectionTitle text='Кейси' />
              <AnimatedSectionSubtitle text='Проекти 2022-2024 років' />
            </TextWrap>
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
          projectsListContainerInView={projectsListContainerInView}
          projectsListContainerRef={projectsListContainerRef}
          servicesSectionInView={servicesSectionInView}
        />
      </GeneralContainer>
    </>
  );
};

export default ProjectsSectionContent;
