import { FC, useRef } from 'react';
import About from '@AboutPageComponents/About';
import { about } from '@/constants';
import { useActivePointAnimation } from '@/hooks';

const AboutPage: FC = () => {
  const processImgContainerRef = useRef<HTMLDivElement>(null);
  const principlesSliderBgRef = useRef<HTMLDivElement>(null);
  const principlesSectionRef = useRef<HTMLDivElement>(null);

  const { activePointTranslateY } = useActivePointAnimation({
    principlesSectionRef,
    principlesSliderBgRef,
    processImgContainerRef,
  });

  const { employees, metrics, principles, system, process } = about;

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
