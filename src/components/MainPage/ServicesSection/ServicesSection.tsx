import { FC } from 'react';
import { IProps } from './ServicesSection.types';
import AnimatedSectionSubtitle from '@AnimationBlocks/AnimatedSectionSubtitle';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import SectionTitle from '@GeneralComponents/SectionTitle';
import { Content, Section, TextWrap } from './ServicesSection.styled';
import AnimatedServicesList from '@AnimationBlocks/AnimatedServicesList';
import { services } from '@/constants';

const ServicesSection: FC<IProps> = ({ servicesSectionRef }) => {
  return (
    <Section ref={servicesSectionRef}>
      <GeneralContainer>
        <Content>
          <TextWrap>
            <SectionTitle text='Послуги та співпраця' />
            <AnimatedSectionSubtitle text='Наша команда допоможе вам з...' />
          </TextWrap>
          <AnimatedServicesList services={services} />
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default ServicesSection;
