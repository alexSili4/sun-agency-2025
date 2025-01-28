import { useInView } from 'framer-motion';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { FC, useEffect, useRef } from 'react';
import { IProps } from './AtbTechnicalTaskPreview.types';
import { Container } from './AtbTechnicalTaskPreview.styled';

const AtbTechnicalTaskPreview: FC<IProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const inView = useInView(containerRef, {
    margin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      if (lottieRef.current?.animationItem) {
        lottieRef.current.animationItem.loop = true;
      }

      lottieRef.current?.setDirection(1);
      lottieRef.current?.play();
    } else {
      if (lottieRef.current?.animationItem) {
        lottieRef.current.animationItem.loop = false;
      }

      lottieRef.current?.setDirection(-1);
      lottieRef.current?.play();
    }
  }, [inView]);

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
