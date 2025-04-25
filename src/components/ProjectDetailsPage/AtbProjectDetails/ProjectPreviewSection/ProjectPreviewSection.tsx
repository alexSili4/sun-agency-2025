import { FC } from 'react';
import { Container, Section } from './ProjectPreviewSection.styled';
import { IProps } from './ProjectPreviewSection.types';
import Lottie from 'lottie-react';
import { useLottieContainerInView } from '@/hooks';

const ProjectPreviewSection: FC<IProps> = ({ animationData }) => {
  const { containerRef, lottieRef } = useLottieContainerInView();

  return (
    <Section>
      <Container ref={containerRef}>
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={false}
        />
      </Container>
    </Section>
  );
};

export default ProjectPreviewSection;
