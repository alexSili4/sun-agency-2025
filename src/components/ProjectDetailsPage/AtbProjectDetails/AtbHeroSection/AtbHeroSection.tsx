import { FC } from 'react';
import {
  Content,
  Background,
  Section,
  Title,
  TitleWrap,
  Container,
} from './AtbHeroSection.styled';
import { IProps } from './AtbHeroSection.types';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ProjectDetailsBreadcrumbs from '@ProjectDetailsPageComponents/ProjectDetailsBreadcrumbs';
import ProjectDetailsTagsList from '@ProjectDetailsPageComponents/ProjectDetailsTagsList';
import AtbHeroSectionBanner from '@AtbProjectDetailsComponents/AtbHeroSectionBanner';

const AtbHeroSection: FC<IProps> = ({
  name,
  tags,
  title,
  primaryBanner,
  borderRadiusDesk,
  borderRadiusMobile,
}) => {
  return (
    <Section>
      <Container>
        <AtbHeroSectionBanner
          banner={primaryBanner}
          borderRadiusDesk={borderRadiusDesk}
          borderRadiusMobile={borderRadiusMobile}
        />
        <Background
          borderRadiusDesk={borderRadiusDesk}
          borderRadiusMobile={borderRadiusMobile}
        >
          <GeneralContainer>
            <Content>
              <ProjectDetailsBreadcrumbs name={name} />
              <TitleWrap>
                <Title>{title}</Title>
                <ProjectDetailsTagsList tags={tags} />
              </TitleWrap>
            </Content>
          </GeneralContainer>
        </Background>
      </Container>
    </Section>
  );
};

export default AtbHeroSection;
