import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import DonationSection from '@MainPageComponents/DonationSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import { IProps } from './Main.types';

const Main: FC<IProps> = ({
  projectsSectionGradientRef,
  shouldShowGradient,
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
  servicesSectionRef,
}) => {
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
