import { FC } from 'react';
import { IProps } from './ClientDetailsProjects.types';
import {
  Container,
  Image,
  List,
  ListItem,
} from './ClientDetailsProjects.styled';

const ClientDetailsProjects: FC<IProps> = ({ projects }) => {
  return (
    <List>
      {projects.map((image, index) => (
        <ListItem key={index}>
          <Container>
            <Image src={image} alt='' />
          </Container>
        </ListItem>
      ))}
    </List>
  );
};

export default ClientDetailsProjects;
