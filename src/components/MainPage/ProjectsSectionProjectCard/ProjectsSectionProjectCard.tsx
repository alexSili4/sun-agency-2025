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
} from './ProjectsSectionProjectCard.styled';
import { IProps } from './ProjectsSectionProjectCard.types';
import { PagePaths } from '@/constants';
// ----- components
import ProjectsSectionProjectCardTagsList from '@MainPageComponents/ProjectsSectionProjectCardTagsList';
import ProjectsSectionProjectCardSpline from '@MainPageComponents/ProjectsSectionProjectCardSpline';

const ProjectsSectionProjectCard: FC<IProps> = ({
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
        <ProjectsSectionProjectCardTagsList tags={tags} />
        {isNewProject && <ProjectsSectionProjectCardSpline />}
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

export default ProjectsSectionProjectCard;
