import { FC } from 'react';
import EmployeesSection from '@AboutPageComponents/EmployeesSection';
import HeroSection from '@AboutPageComponents/HeroSection';
import OurProcessSection from '@AboutPageComponents/OurProcessSection';
import PrinciplesSection from '@AboutPageComponents/PrinciplesSection';
import SystemSection from '@AboutPageComponents/SystemSection';
import { IProps } from './About.types';

const About: FC<IProps> = ({
  employees,
  metrics,
  principles,
  system,
  process,
  principlesSliderBgRef,
  activePointTranslateY,
  processImgContainerRef,
  principlesSectionRef,
}) => {
  return (
    <>
      <HeroSection metrics={metrics} />
      <OurProcessSection
        process={process}
        activePointTranslateY={activePointTranslateY}
        processImgContainerRef={processImgContainerRef}
      />
      <PrinciplesSection
        sectionRef={principlesSectionRef}
        principles={principles}
        backgroundRef={principlesSliderBgRef}
      />
      <SystemSection system={system} />
      <EmployeesSection employees={employees} />
    </>
  );
};

export default About;
