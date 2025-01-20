import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import { IProps } from './Main.types';
import ClientsSection from '@MainPageComponents/ClientsSection';
import ReviewsSection from '@MainPageComponents/ReviewsSection';

const Main: FC<IProps> = ({
  projectsSectionBgRef,
  shouldShowProjectsSectionBg,
  shouldShowClientsSectionContent,
  projectsListContainerRef,
  projectsListContainerInView,
  servicesSectionInView,
  servicesSectionRef,
  reviewsSectionRef,
  clientsSectionRef,
}) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection
        sectionBgRef={projectsSectionBgRef}
        shouldShowSectionBg={shouldShowProjectsSectionBg}
        containerRef={projectsListContainerRef}
        containerInView={projectsListContainerInView}
        inView={servicesSectionInView}
      />
      <ServicesSection servicesSectionRef={servicesSectionRef} />
      <ClientsSection
        shouldShowSectionContent={shouldShowClientsSectionContent}
        sectionRef={clientsSectionRef}
      />
      <ReviewsSection sectionRef={reviewsSectionRef} />
    </>
  );
};

export default Main;
