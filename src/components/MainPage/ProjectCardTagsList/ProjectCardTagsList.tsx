import { FC } from 'react';
import { IProps } from './ProjectCardTagsList.types';
import {
  List,
  Container,
  ListItem,
  Marker,
  Tag,
} from './ProjectCardTagsList.styled';

const ProjectCardTagsList: FC<IProps> = ({ tags }) => {
  return (
    <List>
      {tags.map((tag, index) => (
        <ListItem key={index}>
          <Container>
            <Marker></Marker>
            <Tag>{tag}</Tag>
          </Container>
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectCardTagsList;
