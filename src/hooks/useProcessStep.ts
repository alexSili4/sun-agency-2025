import { MotionValueNumber } from '@/types/types';
import { useEffect, useState } from 'react';

const useProcessStep = (activeIndex: MotionValueNumber): number => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const onProcessActiveIndexChange = (value: number) => {
      const step = Math.round(value);

      setCurrentStep(step);
    };

    const unsubscribe = activeIndex.on('change', onProcessActiveIndexChange);

    return () => unsubscribe();
  }, []);

  return currentStep;
};

export default useProcessStep;
