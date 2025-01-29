import { IUseLottieContainerInView } from '@/types/hooks.types';
import { useInView } from 'framer-motion';
import { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';

const useLottieContainerInView = (): IUseLottieContainerInView => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const inView = useInView(containerRef, {
    margin: '-300px',
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

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

  useEffect(() => {
    lottieRef.current?.stop();
  }, []);

  return { containerRef, lottieRef };
};

export default useLottieContainerInView;
