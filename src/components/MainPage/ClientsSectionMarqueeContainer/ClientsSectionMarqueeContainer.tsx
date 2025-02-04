import { FC } from 'react';
import { IProps } from './ClientsSectionMarqueeContainer.types';
import { List, ListItem } from './ClientsSectionMarqueeContainer.styled';
// ----- components
import ClientsSectionMarquee from '@MainPageComponents/ClientsSectionMarquee';

const ClientsSectionMarqueeContainer: FC<IProps> = ({
  topClientsLine,
  bottomClientsLine,
}) => {
  return (
    <List>
      <ListItem>
        <ClientsSectionMarquee clients={topClientsLine} direction='right' />
      </ListItem>
      <ListItem>
        <ClientsSectionMarquee clients={bottomClientsLine} direction='left' />
      </ListItem>
    </List>
  );
};

export default ClientsSectionMarqueeContainer;
