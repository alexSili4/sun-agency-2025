import {
  IUseActivePointAnimation,
  IUseActivePointAnimationProps,
} from '@/types/hooks.types';
import { useInView } from 'framer-motion';
import { useEffect, useState } from 'react';

const useActivePointAnimation = ({
  processImgContainerRef,
  principlesSectionRef,
  principlesSliderBgRef,
}: IUseActivePointAnimationProps): IUseActivePointAnimation => {
  const [translateY, setTranslateY] = useState<number>(0);

  const principlesSectionInView = useInView(principlesSectionRef);
  const principlesSliderBgInView = useInView(principlesSliderBgRef);

  const activePointTranslateY = principlesSliderBgInView ? translateY : 0;

  useEffect(() => {
    const processImgContainer = processImgContainerRef.current;
    const principlesSliderBg = principlesSliderBgRef.current;

    if (principlesSectionInView && processImgContainer && principlesSliderBg) {
      const processContainerRect = processImgContainer.getBoundingClientRect();
      const principlesSliderBgRect = principlesSliderBg.getBoundingClientRect();

      const translateY =
        principlesSliderBgRect.top - processContainerRect.bottom;

      setTranslateY(translateY);
    }
  }, [principlesSectionInView]);

  return {
    activePointTranslateY,
  };
};

export default useActivePointAnimation;
