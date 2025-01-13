import Main from '@MainPageComponents/Main';
import { FC, useRef } from 'react';
import { useInView } from 'framer-motion';

const MainPage: FC = () => {
  const projectsListContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionBgRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionInView = useInView(servicesSectionRef);
  const projectsSectionBgInView = useInView(projectsSectionBgRef, {
    margin: '-200px',
  });
  const projectsListContainerInView = useInView(projectsListContainerRef, {
    margin: servicesSectionInView ? '-400px' : '-200px',
  });
  const clientsSectionBgRef = useRef<HTMLDivElement>(null);
  const reviewsSectionInView = useInView(reviewsSectionRef, {
    margin: '-300px',
  });
  const clientsSectionBgInView = useInView(clientsSectionBgRef, {
    margin: reviewsSectionInView ? '-400px' : '-200px',
  });
  const shouldShowProjectsSectionBg =
    projectsSectionBgInView && !servicesSectionInView;
  const shouldShowClientsSectionBg =
    clientsSectionBgInView && !reviewsSectionInView;

  return (
    <Main
      projectsSectionBgRef={projectsSectionBgRef}
      shouldShowProjectsSectionBg={shouldShowProjectsSectionBg}
      projectsListContainerRef={projectsListContainerRef}
      projectsListContainerInView={projectsListContainerInView}
      servicesSectionInView={servicesSectionInView}
      servicesSectionRef={servicesSectionRef}
      shouldShowClientsSectionBg={shouldShowClientsSectionBg}
      reviewsSectionRef={reviewsSectionRef}
      clientsSectionBgRef={clientsSectionBgRef}
    />
  );
};

export default MainPage;
