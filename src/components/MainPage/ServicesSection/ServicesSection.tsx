import { FC } from 'react';
import { IProps } from './ServicesSection.types';
import { Content, Section } from './ServicesSection.styled';
import { services } from '@/constants';
// ----- components
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import AnimatedServicesList from '@AnimationBlocks/AnimatedServicesList';
import SectionGeneralTitle from '@MainPageComponents/SectionGeneralTitle';

const ServicesSection: FC<IProps> = ({
  servicesSectionRef,
  nextSectionInView,
}) => {
  return (
    <Section ref={servicesSectionRef}>
      <GeneralContainer>
        <Content>
          <SectionGeneralTitle
            title='Послуги та співпраця'
            subtitle='Наша команда допоможе вам з...'
          />
          <AnimatedServicesList
            services={services}
            nextSectionInView={nextSectionInView}
          />
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default ServicesSection;
