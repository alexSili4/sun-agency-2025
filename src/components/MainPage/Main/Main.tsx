import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import { IProps } from './Main.types';
import ClientsSection from '@MainPageComponents/ClientsSection';
import ReviewsSection from '@MainPageComponents/ReviewsSection';

const Main: FC<IProps> = ({
  projectsSectionBgRef,
  shouldShowClientsSectionContent,
  servicesSectionRef,
  reviewsSectionRef,
  clientsSectionRef,
  projectsSectionBgInView,
  servicesSectionInViewWithMargin,
  clientsSectionInView,
}) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection
        nextSectionInView={servicesSectionInViewWithMargin}
        sectionBgInView={projectsSectionBgInView}
        sectionBgRef={projectsSectionBgRef}
      />
      <ServicesSection
        servicesSectionRef={servicesSectionRef}
        nextSectionInView={clientsSectionInView}
      />
      <ClientsSection
        shouldShowSectionContent={shouldShowClientsSectionContent}
        sectionRef={clientsSectionRef}
      />
      <ReviewsSection sectionRef={reviewsSectionRef} />
    </>
  );
};

export default Main;
