import { FC } from 'react';
import { IProps } from './ClientProjects.types';
import { Container, Image, List, ListItem } from './ClientProjects.styled';

const ClientProjects: FC<IProps> = ({ projects }) => {
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

export default ClientProjects;