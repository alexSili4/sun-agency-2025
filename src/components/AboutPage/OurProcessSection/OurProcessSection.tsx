import { FC } from 'react';
import { Section, Container } from './OurProcessSection.styled';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import OurProcessSectionSteps from '@AboutPageComponents/OurProcessSectionSteps';
import { IProps } from './OurProcessSection.types';

const OurProcessSection: FC<IProps> = ({ process }) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AboutPageSectionTitle title='Наш Процес' />
          <OurProcessSectionSteps process={process} />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default OurProcessSection;
