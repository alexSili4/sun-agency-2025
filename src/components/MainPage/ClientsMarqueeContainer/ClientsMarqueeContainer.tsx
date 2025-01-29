import { FC } from 'react';
import { IProps } from './ClientsMarqueeContainer.types';
import { List, ListItem } from './ClientsMarqueeContainer.styled';
// ----- components
import ClientsMarquee from '@MainPageComponents/ClientsMarquee';

const ClientsMarqueeContainer: FC<IProps> = ({
  topClientsLine,
  bottomClientsLine,
}) => {
  return (
    <List>
      <ListItem>
        <ClientsMarquee clients={topClientsLine} direction='right' />
      </ListItem>
      <ListItem>
        <ClientsMarquee clients={bottomClientsLine} direction='left' />
      </ListItem>
    </List>
  );
};

export default ClientsMarqueeContainer;
