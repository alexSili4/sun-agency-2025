import { FC } from 'react';
import { IProps } from './ProjectDetailsTag.types';
import { Container, Tag } from './ProjectDetailsTag.styled';

const ProjectDetailsTag: FC<IProps> = ({ tag }) => {
  return (
    <Container>
      <Tag>{tag}</Tag>
    </Container>
  );
};

export default ProjectDetailsTag;
