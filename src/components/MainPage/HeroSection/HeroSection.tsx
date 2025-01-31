import { FC, useRef } from 'react';
import { Section, Container } from './HeroSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, smoothScroll } from '@/utils';
import { useScroll, useTransform } from 'framer-motion';
import { SectionsIds } from '@/constants';
// ----- components
import AnimatedHeroSectionTitle from '@AnimationBlocks/AnimatedHeroSectionTitle';
import DonationSectionContent from '@MainPageComponents/DonationSectionContent';
import GeneralContainer from '@GeneralComponents/GeneralContainer';
import BusinessMetrics from '@MainPageComponents/BusinessMetrics';
import ParticlesItem from '@GeneralComponents/ParticlesItem';

const HeroSection: FC = () => {
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
          <DonationSectionContent onScrollBtnClick={onScrollBtnClick} />
        </Container>
      </GeneralContainer>
      <BusinessMetrics />
      <ParticlesItem />
    </Section>
  );
};

export default HeroSection;
