import { FC } from 'react';
import { IProps } from './AnimatedClientsSectionClientsList.types';
import ClientsSectionClientsClientDetails from '@ClientsPageComponents/ClientsSectionClientsClientDetails';
import {
  Container,
  List,
  ListItem,
} from './AnimatedClientsSectionClientsList.styled';
import { AnimatePresence, Transition } from 'framer-motion';

const AnimatedClientsSectionClientsList: FC<IProps> = ({ clients }) => {
  return (
    <Container>
      <List>
        <AnimatePresence>
          {clients.map(
            (
              {
                id,
                generalInfo: { projects, years },
                images,
                logo,
                primaryLogo,
                text,
                websiteAddress,
              },
              index
            ) => {
              const delay = index * 0.05;
              const reverseDelay = (clients.length - index) * 0.05;

              const transition: Transition = {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay,
              };

              const exitTransition: Transition = {
                ...transition,
                delay: reverseDelay,
              };

              return (
                <ListItem
                  key={id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: exitTransition }}
                  transition={transition}
                >
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
              );
            }
          )}
        </AnimatePresence>
      </List>
    </Container>
  );
};

export default AnimatedClientsSectionClientsList;
