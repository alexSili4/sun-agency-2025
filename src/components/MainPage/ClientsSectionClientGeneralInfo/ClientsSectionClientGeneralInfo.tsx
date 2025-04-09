import { FC } from 'react';
import { IProps } from './ClientsSectionClientGeneralInfo.types';
import {
  Container,
  List,
  ListItem,
  Number,
  Title,
} from './ClientsSectionClientGeneralInfo.styled';

const ClientsSectionClientGeneralInfo: FC<IProps> = ({ projects, years }) => {
  return (
    <List>
      <ListItem>
        <Container>
          <Number src={projects} alt='' />
          <Title>успішних проектів</Title>
        </Container>
      </ListItem>
      <ListItem>
        <Container>
          <Number src={years} alt='' />
          <Title>років співпраці</Title>
        </Container>
      </ListItem>
    </List>
  );
};

export default ClientsSectionClientGeneralInfo;
