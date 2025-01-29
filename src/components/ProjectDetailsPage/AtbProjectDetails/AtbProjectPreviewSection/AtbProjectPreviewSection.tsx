import { FC } from 'react';
import { Container, Section } from './AtbProjectPreviewSection.styled';
import { IProps } from './AtbProjectPreviewSection.types';
import Lottie from 'lottie-react';
import { useLottieContainerInView } from '@/hooks';

const AtbProjectPreviewSection: FC<IProps> = ({ animationData }) => {
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

export default AtbProjectPreviewSection;
