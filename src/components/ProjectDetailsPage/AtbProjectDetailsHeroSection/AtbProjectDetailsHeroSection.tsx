import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { FC } from 'react';
import {
  Container,
  Background,
  Section,
  Title,
  TitleWrap,
} from './AtbProjectDetailsHeroSection.styled';
import ProjectDetailsBreadcrumbs from '@ProjectDetailsPageComponents/ProjectDetailsBreadcrumbs';
import ProjectDetailsTagsList from '@ProjectDetailsPageComponents/ProjectDetailsTagsList';
import { IProps } from './AtbProjectDetailsHeroSection.types';
import AtbHeroSectionBanner from '@ProjectDetailsPageComponents/AtbHeroSectionBanner';

const AtbProjectDetailsHeroSection: FC<IProps> = ({
  name,
  tags,
  title,
  primaryBanner,
  borderRadius,
}) => {
  return (
    <Section>
      <AtbHeroSectionBanner
        banner={primaryBanner}
        borderRadius={borderRadius}
      />
      <Background borderRadius={borderRadius}>
        <GeneralContainer>
          <Container>
            <ProjectDetailsBreadcrumbs name={name} />
            <TitleWrap>
              <ProjectDetailsTagsList tags={tags} />
              <Title>{title}</Title>
            </TitleWrap>
          </Container>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default AtbProjectDetailsHeroSection;
