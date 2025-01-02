import { FC } from 'react';
import SectionTitle from '@GeneralComponents/SectionTitle';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import { TextWrap } from './ProjectsSectionContent.styled';

const ProjectsSectionContent: FC = () => {
  return (
    <>
      <TextWrap>
        <SectionTitle text='Кейси' />
        <AnimatedSectionSubtitle text='Проекти 2022-2024 років' />
      </TextWrap>
    </>
  );
};

export default ProjectsSectionContent;
