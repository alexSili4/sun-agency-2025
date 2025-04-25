import { FC } from 'react';
import { IProps } from './TechnicalTaskSectionServicesList.types';
import { List, ListItem } from './TechnicalTaskSectionServicesList.styled';
// ----- components
import TechnicalTaskSectionServiceDetails from '@AtbProjectDetailsComponents/TechnicalTaskSectionServiceDetails';

const TechnicalTaskSectionServicesList: FC<IProps> = ({ services }) => {
  return (
    <List>
      {services.map((service, index) => (
        <ListItem key={index}>
          <TechnicalTaskSectionServiceDetails service={service} />
        </ListItem>
      ))}
    </List>
  );
};

export default TechnicalTaskSectionServicesList;
