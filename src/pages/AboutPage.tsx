import { FC, useEffect, useRef, useState } from 'react';
import About from '@AboutPageComponents/About';
import { about } from '@/constants';
import { useInView } from 'framer-motion';

const AboutPage: FC = () => {
  const [translateY, setTranslateY] = useState<number>(0);
  const processImgContainerRef = useRef<HTMLDivElement>(null);
  const principlesSliderBgRef = useRef<HTMLDivElement>(null);
  const principlesSectionRef = useRef<HTMLDivElement>(null);
  const principlesSliderBgInView = useInView(principlesSliderBgRef);
  const principlesSectionInView = useInView(principlesSectionRef);

  const { employees, metrics, principles, system, process } = about;

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

  return (
    <About
      employees={employees}
      metrics={metrics}
      principles={principles}
      system={system}
      process={process}
      principlesSliderBgRef={principlesSliderBgRef}
      activePointTranslateY={activePointTranslateY}
      processImgContainerRef={processImgContainerRef}
      principlesSectionRef={principlesSectionRef}
    />
  );
};

export default AboutPage;
