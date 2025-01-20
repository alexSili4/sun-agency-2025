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
  const clientsSectionRef = useRef<HTMLDivElement>(null);
  const reviewsSectionInView = useInView(reviewsSectionRef, {
    margin: '-300px',
  });
  const clientsSectionInView = useInView(clientsSectionRef, {
    margin: '-300px',
  });
  const shouldShowProjectsSectionBg =
    projectsSectionBgInView && !servicesSectionInView;
  const shouldShowClientsSectionContent =
    clientsSectionInView && !reviewsSectionInView;

  return (
    <Main
      projectsSectionBgRef={projectsSectionBgRef}
      shouldShowProjectsSectionBg={shouldShowProjectsSectionBg}
      projectsListContainerRef={projectsListContainerRef}
      projectsListContainerInView={projectsListContainerInView}
      servicesSectionInView={servicesSectionInView}
      servicesSectionRef={servicesSectionRef}
      shouldShowClientsSectionContent={shouldShowClientsSectionContent}
      reviewsSectionRef={reviewsSectionRef}
      clientsSectionRef={clientsSectionRef}
    />
  );
};

export default MainPage;
