import Lottie from 'lottie-react';
import { FC } from 'react';
import { IProps } from './TechnicalTaskSectionPreview.types';
import { Container } from './TechnicalTaskSectionPreview.styled';
import { useLottieContainerInView } from '@/hooks';

const TechnicalTaskSectionPreview: FC<IProps> = ({ animationData }) => {
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

export default TechnicalTaskSectionPreview;
