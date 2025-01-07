import { FC } from 'react';
import { IProps } from './TagsList.types';
import { List, Container, ListItem, Marker, Tag } from './TagsList.styled';

const TagsList: FC<IProps> = ({ tags }) => {
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

export default TagsList;
