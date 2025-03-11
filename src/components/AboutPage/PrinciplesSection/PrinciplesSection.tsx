import { FC } from 'react';
import AboutPageSectionTitle from '@AboutPageComponents/AboutPageSectionTitle';
import { Container, Section } from './PrinciplesSection.styled';
import PrinciplesSectionSlider from '@AboutPageComponents/PrinciplesSectionSlider';
import { IProps } from './PrinciplesSection.types';

const PrinciplesSection: FC<IProps> = ({ principles }) => {
  return (
    <Section>
      <Container>
        <AboutPageSectionTitle title='Принципи' />
        <PrinciplesSectionSlider principles={principles} />
      </Container>
    </Section>
  );
};

export default PrinciplesSection;
