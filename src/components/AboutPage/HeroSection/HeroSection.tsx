import GeneralContainer from '@/components/General/GeneralContainer';
import { FC, useRef } from 'react';
import HeroSectionAboutUs from '@AboutPageComponents/HeroSectionAboutUs';
import { Section, Container, Content, Background } from './HeroSection.styled';
import HeroSectionTitle from '@AboutPageComponents/HeroSectionTitle';
import Breadcrumbs from '@GeneralComponents/Breadcrumbs';
import { IProps } from './HeroSection.types';
import HeroSectionScene from '@AboutPageComponents/HeroSectionScene';
import { useInView } from 'framer-motion';
import HiddenPageTitle from '@GeneralComponents/HiddenPageTitle';

const HeroSection: FC<IProps> = ({ metrics }) => {
  const aboutUsContainerRef = useRef<HTMLDivElement>(null);

  const aboutUsContainerInView = useInView(aboutUsContainerRef);

  const rotate = aboutUsContainerInView ? 59 : 0;
  const scale = aboutUsContainerInView ? 0.7 : 1;
  const translateX = aboutUsContainerInView ? -325 : 0;
  const translateY = aboutUsContainerInView ? 700 : 0;

  return (
    <Section>
      <HiddenPageTitle title='Про нас' />
      <HeroSectionScene
        rotate={rotate}
        scale={scale}
        translateX={translateX}
        translateY={translateY}
      />
      <Background>
        <GeneralContainer>
          <Container>
            <Breadcrumbs />
            <Content>
              <HeroSectionTitle />
              <HeroSectionAboutUs
                metrics={metrics}
                containerRef={aboutUsContainerRef}
              />
            </Content>
          </Container>
        </GeneralContainer>
      </Background>
    </Section>
  );
};

export default HeroSection;
