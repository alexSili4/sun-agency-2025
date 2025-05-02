import { FC } from 'react';
import { IProps } from './Main.types';
// ----- components
import HeroSection from '@MainPageComponents/HeroSection';
import ProjectsSection from '@MainPageComponents/ProjectsSection';
import ServicesSection from '@MainPageComponents/ServicesSection';
import ClientsSection from '@MainPageComponents/ClientsSection';
import ReviewsSection from '@MainPageComponents/ReviewsSection';

const Main: FC<IProps> = ({
  projectsSectionInView,
  projectsSectionBgRef,
  projectsSectionBgInView,
  servicesSectionInViewWithMargin,
  servicesSectionRef,
  clientsSectionInView,
  clientsSectionRef,
  shouldShowClientsSectionContent,
  reviewsSectionRef,
  projectsSectionRef,
  clients,
}) => {
  return (
    <>
      <HeroSection nextSectionInView={projectsSectionInView} />
      <ProjectsSection
        sectionRef={projectsSectionRef}
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
        clients={clients}
      />
      <ReviewsSection sectionRef={reviewsSectionRef} />
    </>
  );
};

export default Main;
