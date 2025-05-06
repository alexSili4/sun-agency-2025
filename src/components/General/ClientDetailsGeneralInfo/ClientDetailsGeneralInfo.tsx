import { FC } from 'react';
import { IProps } from './ClientDetailsGeneralInfo.types';
import {
  Container,
  List,
  ListItem,
  Projects,
  Title,
  Years,
} from './ClientDetailsGeneralInfo.styled';

const ClientDetailsGeneralInfo: FC<IProps> = ({ projects, years }) => {
  return (
    <List>
      <ListItem>
        <Container>
          <Projects>{projects}</Projects>
          <Title>успішних проектів</Title>
        </Container>
      </ListItem>
      <ListItem>
        <Container>
          <Years>{years}</Years>
          <Title>років співпраці</Title>
        </Container>
      </ListItem>
    </List>
  );
};

export default ClientDetailsGeneralInfo;
