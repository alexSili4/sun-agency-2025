import { FC, useRef } from 'react';
import { Section, Container } from './HeroSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import { useScroll, useTransform } from 'framer-motion';
import { SectionsIds } from '@/constants';
// ----- components
import AnimatedHeroSectionTitle from '@AnimatedMainPageComponents/AnimatedHeroSectionTitle';
import HeroSectionDonationInfo from '@MainPageComponents/HeroSectionDonationInfo';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import HeroSectionBusinessMetrics from '@MainPageComponents/HeroSectionBusinessMetrics';
import ParticlesItem from '@GeneralComponents/ParticlesItem';
import { IProps } from './HeroSection.types';

const HeroSection: FC<IProps> = ({ nextSectionInView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end start', 'start end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  const onScrollBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    smoothScroll({ id: SectionsIds.projects });
  };

  return (
    <Section>
      <GeneralContainer>
        <Container ref={containerRef}>
          <AnimatedHeroSectionTitle scale={scale} />
          <HeroSectionDonationInfo onScrollBtnClick={onScrollBtnClick} />
        </Container>
      </GeneralContainer>
      <HeroSectionBusinessMetrics nextSectionInView={nextSectionInView} />
      <ParticlesItem />
    </Section>
  );
};

export default HeroSection;
