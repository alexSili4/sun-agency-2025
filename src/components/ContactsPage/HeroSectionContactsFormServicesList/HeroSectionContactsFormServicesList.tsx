import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormServicesList.types';
import {
  Container,
  List,
  ListItem,
  ListWrap,
} from './HeroSectionContactsFormServicesList.styled';
import HeroSectionContactsFormService from '@ContactsPageComponents/HeroSectionContactsFormService';

const HeroSectionContactsFormServicesList: FC<IProps> = ({ services }) => {
  return (
    <Container>
      <ListWrap>
        <List>
          {services.map((service, index) => (
            <ListItem key={index}>
              <HeroSectionContactsFormService service={service} />
            </ListItem>
          ))}
        </List>
      </ListWrap>
    </Container>
  );
};

export default HeroSectionContactsFormServicesList;
