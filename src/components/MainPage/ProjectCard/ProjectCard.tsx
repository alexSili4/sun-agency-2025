import { FC } from 'react';
import { Link } from 'react-router-dom';
import TagsList from '@MainPageComponents/TagsList';
import { Container, Image, Name, Year, ImgWrap } from './ProjectCard.styled';
import { IProps } from './ProjectCard.types';

const ProjectCard: FC<IProps> = ({ projectPath, img, name, tags, year }) => {
  return (
    <Link to={projectPath}>
      <Container>
        <ImgWrap>
          <Image src={img} alt={name} />
          <TagsList tags={tags} />
          <Name>{name}</Name>
          <Year>{year}</Year>
        </ImgWrap>
      </Container>
    </Link>
  );
};

export default ProjectCard;
