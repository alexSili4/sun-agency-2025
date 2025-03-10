import { FC } from 'react';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import { Container, Section } from './PrinciplesSection.styled';
import PrinciplesSectionSlider from '@AboutPageComponents/PrinciplesSectionSlider';
import { IProps } from './PrinciplesSection.types';

const PrinciplesSection: FC<IProps> = ({ principles }) => {
  return (
    <Section>
      <GeneralContainer>
        <Container>
          <AboutPageSectionTitle title='Принципи' />
          <PrinciplesSectionSlider principles={principles} />
        </Container>
      </GeneralContainer>
    </Section>
  );
};

export default PrinciplesSection;
