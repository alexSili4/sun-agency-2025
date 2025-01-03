import { FC } from 'react';
import SectionTitle from '@GeneralComponents/SectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import {
  Container,
  TextWrap,
  ContentWrap,
} from './ProjectsSectionContent.styled';
import GlowingLink from '@GeneralComponents/GlowingLink';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { PagePaths } from '@/constants';

const ProjectsSectionContent: FC = () => {
  return (
    <Container>
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
  );
};

export default ProjectsSectionContent;
