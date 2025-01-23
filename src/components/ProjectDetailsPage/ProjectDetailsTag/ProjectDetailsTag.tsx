import { FC } from 'react';
import { IProps } from './ProjectDetailsTag.types';
import { Container, Marker, Tag } from './ProjectDetailsTag.styled';

const ProjectDetailsTag: FC<IProps> = ({ tag }) => {
  return (
    <Container>
      <Marker></Marker>
      <Tag>{tag}</Tag>
    </Container>
  );
};

export default ProjectDetailsTag;
