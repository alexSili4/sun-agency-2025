import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import { Section } from './PrinciplesSection.styled';

const PrinciplesSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <AboutPageSectionTitle title='Принципи' />
      </GeneralContainer>
    </Section>
  );
};

export default PrinciplesSection;
