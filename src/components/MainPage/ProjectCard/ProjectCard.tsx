import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ContentWrap,
  Image,
  Name,
  Year,
  ImgWrap,
  StyledLink,
  StyledSplineContainer,
} from './ProjectCard.styled';
import { IProps } from './ProjectCard.types';
import { PagePaths } from '@/constants';
// ----- components
import ProjectCardTagsList from '@MainPageComponents/ProjectCardTagsList';

const ProjectCard: FC<IProps> = ({
  projectPath,
  img,
  name,
  tags,
  year,
  isNewProject = false,
}) => {
  const content = (
    <ContentWrap>
      <ImgWrap>
        <Image src={img} alt={name} />
        <ProjectCardTagsList tags={tags} />
        {isNewProject && (
          <StyledSplineContainer>
            {/* TODO fix */}
            <p>StyledSpline</p>
            {/* <StyledSpline scene={Scenes.newProject} /> */}
          </StyledSplineContainer>
        )}
        <Name isNewProject={isNewProject}>{name}</Name>
        {isNewProject && (
          <StyledLink to={PagePaths.contacts}>Напишіть нам</StyledLink>
        )}
        <Year>{year}</Year>
      </ImgWrap>
    </ContentWrap>
  );

  return isNewProject ? (
    <Container>{content}</Container>
  ) : (
    <Link to={projectPath}>{content}</Link>
  );
};

export default ProjectCard;
