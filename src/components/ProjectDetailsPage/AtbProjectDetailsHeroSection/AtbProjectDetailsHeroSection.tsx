import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Background,
  Section,
  Title,
  TitleWrap,
} from './AtbProjectDetailsHeroSection.styled';
import ProjectDetailsBreadcrumbs from '@ProjectDetailsPageComponents/ProjectDetailsBreadcrumbs';
import ProjectDetailsTagsList from '@ProjectDetailsPageComponents/ProjectDetailsTagsList';
import { IProps } from './AtbProjectDetailsHeroSection.types';

const AtbProjectDetailsHeroSection: FC<IProps> = ({ name, tags, title }) => {
  return (
    <Section>
      <Background>
        <GeneralContainer>
          <ProjectDetailsBreadcrumbs name={name} />
          <TitleWrap>
            <ProjectDetailsTagsList tags={tags} />
            <Title>{title}</Title>
          </TitleWrap>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default AtbProjectDetailsHeroSection;
