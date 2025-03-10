import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import { Section } from './SystemSection.styled';

const SystemSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <AboutPageSectionTitle title='Система' />
      </GeneralContainer>
    </Section>
  );
};

export default SystemSection;
