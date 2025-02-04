import { FC } from 'react';
import { IProps } from './ClientsSectionClientProjects.types';
import {
  Container,
  Image,
  List,
  ListItem,
} from './ClientsSectionClientProjects.styled';

const ClientsSectionClientProjects: FC<IProps> = ({ projects }) => {
  return (
    <List>
      {projects.map((image, index) => (
        <ListItem key={index}>
          <Container>
            <Image src={image} />
          </Container>
        </ListItem>
      ))}
    </List>
  );
};

export default ClientsSectionClientProjects;
