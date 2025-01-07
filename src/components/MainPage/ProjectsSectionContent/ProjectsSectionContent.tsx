import { FC } from 'react';
import SectionTitle from '@GeneralComponents/SectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import {
  Container,
  TextWrap,
  ContentWrap,
  SectionGradient,
} from './ProjectsSectionContent.styled';
import GlowingLink from '@GeneralComponents/GlowingLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { PagePaths } from '@/constants';
import ProjectsList from '@MainPageComponents/ProjectsList';
import { projects } from '@/constants';
// TODO fix img
import sectionGradient from '@/images/projects/section-gradient.png';
import { IProps } from './ProjectsSectionContent.types';
import SmoothFadeInElement from '@AnimationBlocks/SmoothFadeInElement';

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
        <SmoothFadeInElement
          shouldShow={shouldShowGradient}
          elementRef={projectsSectionGradientRef}
          nextElementInView={servicesSectionInView}
          isPositionAbsolute
        >
          <SectionGradient src={sectionGradient} />
        </SmoothFadeInElement>
        <GeneralContainer isFullHeight>
          <ContentWrap>
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
          </ContentWrap>
        </GeneralContainer>
      </Container>
      <GeneralContainer>
        <SmoothFadeInElement
          isPositionAbsolute={false}
          elementRef={projectsListContainerRef}
          shouldShow={projectsListContainerInView}
          nextElementInView={servicesSectionInView}
        >
          <ContentWrap isProjectsListWrap>
            <ProjectsList projects={projects} />
          </ContentWrap>
        </SmoothFadeInElement>
      </GeneralContainer>
    </>
  );
};

export default ProjectsSectionContent;
