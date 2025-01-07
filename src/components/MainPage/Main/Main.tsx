import { FC, useRef } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import DonationSection from '@MainPageComponents/DonationSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import { useInView } from 'motion/react';

const Main: FC = () => {
  const projectsListContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionGradientRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionGradientInView = useInView(projectsSectionGradientRef, {
    margin: '-300px',
  });
  const projectsListContainerInView = useInView(projectsListContainerRef, {
    margin: '-300px',
  });
  const servicesSectionInView = useInView(servicesSectionRef);
  const shouldShowGradient =
    projectsSectionGradientInView && !servicesSectionInView;

  return (
    <>
      <HeroSection />
      <DonationSection />
      <ProjectsSection
        projectsSectionGradientRef={projectsSectionGradientRef}
        shouldShowGradient={shouldShowGradient}
        projectsListContainerRef={projectsListContainerRef}
        projectsListContainerInView={projectsListContainerInView}
        servicesSectionInView={servicesSectionInView}
      />
      <ServicesSection servicesSectionRef={servicesSectionRef} />
    </>
  );
};

export default Main;
