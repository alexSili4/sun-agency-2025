import { FC } from 'react';
import { Section } from './OurProcessSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';

const OurProcessSection: FC = () => {
  return (
    <Section>
      <GeneralContainer>
        <AboutPageSectionTitle title='Наш Процес' />
      </GeneralContainer>
    </Section>
  );
};

export default OurProcessSection;
