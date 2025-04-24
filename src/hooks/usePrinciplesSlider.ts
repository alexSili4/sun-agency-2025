import { useEffect, useState } from 'react';
import { ISwiper, NumberOrNull, RefDivObject } from '@/types/types';
import { IUsePrinciplesSlider } from '@/types/hooks.types';

const usePrinciplesSlider = (ref: RefDivObject): IUsePrinciplesSlider => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [size, setSize] = useState<NumberOrNull>(null);

  useEffect(() => {
    const scrollWidth = ref.current?.scrollWidth;

    if (scrollWidth) {
      setSize(scrollWidth);
    }
  }, []);

  const onAutoplayTimeLeft = (_: ISwiper, __: number, time: number) => {
    const progress = (1 - time) * 100;

    setProgress(progress);
  };

  const onSwiper = (swiper: ISwiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return {
    onSwiper,
    onAutoplayTimeLeft,
    activeIndex,
    size,
    progress,
  };
};

export default usePrinciplesSlider;
