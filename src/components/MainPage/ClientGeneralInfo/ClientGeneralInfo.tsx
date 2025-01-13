import { FC } from 'react';
import { IProps } from './ClientGeneralInfo.types';
import {
  Container,
  List,
  ListItem,
  Number,
  Title,
} from './ClientGeneralInfo.styled';

const ClientGeneralInfo: FC<IProps> = ({ projects, years }) => {
  return (
    <List>
      <ListItem>
        <Container>
          <Number src={projects} />
          <Title>успішних проектів</Title>
        </Container>
      </ListItem>
      <ListItem>
        <Container>
          <Number src={years} />
          <Title>років співпраці</Title>
        </Container>
      </ListItem>
    </List>
  );
};

export default ClientGeneralInfo;
