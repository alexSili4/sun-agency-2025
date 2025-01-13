import { FC } from 'react';
import { IProps } from './ServicesSection.types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import { Content, Section } from './ServicesSection.styled';
import AnimatedServicesList from '@AnimationBlocks/AnimatedServicesList';
import { services } from '@/constants';
import SectionGeneralTitle from '@MainPageComponents/SectionGeneralTitle';

const ServicesSection: FC<IProps> = ({ servicesSectionRef }) => {
  return (
    <Section ref={servicesSectionRef}>
      <GeneralContainer>
        <Content>
          <SectionGeneralTitle
            title='Послуги та співпраця'
            subtitle='Наша команда допоможе вам з...'
          />
          <AnimatedServicesList services={services} />
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default ServicesSection;
