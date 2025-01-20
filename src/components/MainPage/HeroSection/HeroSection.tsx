import { FC } from 'react';
import HeroSectionTitle from '@MainPageComponents/HeroSectionTitle';
import { Section, Container } from './HeroSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import { SectionsIds } from '@/constants';
import DonationSectionContent from '@MainPageComponents/DonationSectionContent';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import BusinessMetrics from '@MainPageComponents/BusinessMetrics';
import ParticlesItem from '@GeneralComponents/ParticlesItem';

const HeroSection: FC = () => {
  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    smoothScroll({ id: SectionsIds.projects });
  };

  return (
    <Section>
      <GeneralContainer>
        <Container>
          <HeroSectionTitle />
          <DonationSectionContent onScrollBtnClick={onScrollBtnClick} />
        </Container>
      </GeneralContainer>
      <BusinessMetrics />
      <ParticlesItem />
    </Section>
  );
};

export default HeroSection;
