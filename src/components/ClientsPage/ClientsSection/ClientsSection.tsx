import { FC } from 'react';
import HiddenSectionTitle from '@GeneralComponents/HiddenSectionTitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedClientsSectionContent from '@AnimatedClientsPageComponents/AnimatedClientsSectionContent';
import { Section } from './ClientsSection.styled';
import { IProps } from './ClientsSection.types';
import { useFilteredClients } from '@/hooks';

const ClientsSection: FC<IProps> = ({ filters, clients }) => {
  const filteredClients = useFilteredClients(clients);

  return (
    <Section>
      <HiddenSectionTitle title='Наші клієнти' />
      <GeneralContainer>
        <AnimatedClientsSectionContent
          clients={filteredClients}
          filters={filters}
        />
      </GeneralContainer>
    </Section>
  );
};

export default ClientsSection;
