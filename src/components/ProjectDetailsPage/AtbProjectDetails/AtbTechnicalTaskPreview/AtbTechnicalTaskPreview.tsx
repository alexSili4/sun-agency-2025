import Lottie from 'lottie-react';
import { FC } from 'react';
import { IProps } from './AtbTechnicalTaskPreview.types';
import { Container } from './AtbTechnicalTaskPreview.styled';
import { useLottieContainerInView } from '@/hooks';

const AtbTechnicalTaskPreview: FC<IProps> = ({ animationData }) => {
  const { containerRef, lottieRef } = useLottieContainerInView();

  return (
    <Container ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
      />
    </Container>
  );
};

export default AtbTechnicalTaskPreview;
