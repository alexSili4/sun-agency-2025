import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import DonationSection from '@MainPageComponents/DonationSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import { IProps } from './Main.types';
import ClientsSection from '@MainPageComponents/ClientsSection';
import ReviewsSection from '@MainPageComponents/ReviewsSection';

const Main: FC<IProps> = ({
  projectsSectionBgRef,
  shouldShowProjectsSectionBg,
  shouldShowClientsSectionBg,
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
  servicesSectionRef,
  reviewsSectionRef,
  clientsSectionBgRef,
}) => {
  return (
    <>
      <HeroSection />
      <DonationSection />
      <ProjectsSection
        sectionBgRef={projectsSectionBgRef}
        shouldShowSectionBg={shouldShowProjectsSectionBg}
        containerRef={projectsListContainerRef}
        containerInView={projectsListContainerInView}
        inView={servicesSectionInView}
      />
      <ServicesSection servicesSectionRef={servicesSectionRef} />
      <ClientsSection
        shouldShowSectionBg={shouldShowClientsSectionBg}
        sectionBgRef={clientsSectionBgRef}
      />
      <ReviewsSection sectionRef={reviewsSectionRef} />
    </>
  );
};

export default Main;
