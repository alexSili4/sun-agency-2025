import { FC } from 'react';
import { IProps } from './AtbTechnicalTaskServicesList.types';
import AtbTechnicalTaskService from '@ProjectDetailsPageComponents/AtbTechnicalTaskService';
import { List, ListItem } from './AtbTechnicalTaskServicesList.styled';

const AtbTechnicalTaskServicesList: FC<IProps> = ({ services }) => {
  return (
    <List>
      {services.map((service, index) => (
        <ListItem key={index}>
          <AtbTechnicalTaskService service={service} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbTechnicalTaskServicesList;
