import { FC } from 'react';
import { IProps } from './ProjectsSectionProjectCardTagsList.types';
import {
  List,
  Container,
  ListItem,
  Marker,
  Tag,
} from './ProjectsSectionProjectCardTagsList.styled';

const ProjectsSectionProjectCardTagsList: FC<IProps> = ({ tags }) => {
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

export default ProjectsSectionProjectCardTagsList;
