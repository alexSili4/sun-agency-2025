import { FC } from 'react';
import { IProps } from './ClientsSectionClientsList.types';
import ClientsSectionClientsClientDetails from '@ClientsPageComponents/ClientsSectionClientsClientDetails';
import { Container, List, ListItem } from './ClientsSectionClientsList.styled';

const ClientsSectionClientsList: FC<IProps> = ({ clients }) => {
  return (
    <Container>
      <List>
        {clients.map(
          ({
            id,
            generalInfo: { projects, years },
            images,
            logo,
            primaryLogo,
            text,
            websiteAddress,
          }) => (
            <ListItem key={id}>
              <ClientsSectionClientsClientDetails
                images={images}
                logo={logo}
                primaryLogo={primaryLogo}
                text={text}
                websiteAddress={websiteAddress}
                projects={projects}
                years={years}
              />
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
};

export default ClientsSectionClientsList;
