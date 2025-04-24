import {
  IUseProcessStepsListAnimationProps,
  IUseProcessStepsListAnimation,
} from '@/types/hooks.types';
import { Transition, useScroll, useTransform, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useProcessStep from './useProcessStep';
import { getProcessStepsAngles } from '@/utils';

const useProcessStepsListAnimation = ({
  containerRef,
  process,
}: IUseProcessStepsListAnimationProps): IUseProcessStepsListAnimation => {
  const [isPrevElement, setIsPrevElement] = useState<boolean>(false);
  const processLength = process.length;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0, processLength - 1, processLength - 1],
    {
      clamp: true,
    }
  );
  const defaultIndex = activeIndex.get();
  const prevIndex = useRef<number>(defaultIndex);
  const currentStep = useProcessStep(activeIndex);

  const processStepsAngles = getProcessStepsAngles(processLength);
  const activePointRotate = processStepsAngles[currentStep];

  const yFrom = isPrevElement ? '-100%' : '100%';
  const yTo = isPrevElement ? '100%' : '-100%';

  const transition: Transition = {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const textVariants: Variants = {
    initial: { y: yFrom, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: yTo,
      opacity: 0,
      transition,
    },
  };

  useEffect(() => {
    const onProcessActiveIndexChange = (value: number) => {
      const previous = prevIndex.current;
      const isPrevElement = value < previous;

      setIsPrevElement(isPrevElement);

      prevIndex.current = value;
    };

    const unsubscribe = activeIndex.on('change', onProcessActiveIndexChange);

    return () => unsubscribe();
  }, []);

  return { textVariants, currentStep, activePointRotate };
};

export default useProcessStepsListAnimation;
