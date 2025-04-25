import { FC } from 'react';
import {
  Content,
  Background,
  Section,
  Title,
  TitleWrap,
  Container,
} from './HeroSection.styled';
import { IProps } from './HeroSection.types';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import ProjectDetailsBreadcrumbs from '@ProjectDetailsPageComponents/ProjectDetailsBreadcrumbs';
import ProjectDetailsTagsList from '@ProjectDetailsPageComponents/ProjectDetailsTagsList';
import HeroSectionBanner from '@AtbProjectDetailsComponents/HeroSectionBanner';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';

const HeroSection: FC<IProps> = ({
  name,
  tags,
  title,
  primaryBanner,
  borderRadiusDesk,
  borderRadiusMobile,
}) => {
  return (
    <Section>
      <HiddenPageTitle title='Онлайн магазин АТБ' />
      <Container>
        <HeroSectionBanner
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

export default HeroSection;
