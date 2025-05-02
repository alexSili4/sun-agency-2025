import { clients } from '@/constants';
import Main from '@MainPageComponents/Main';
import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';

const MainPage: FC = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionBgRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const clientsSectionRef = useRef<HTMLDivElement>(null);
  const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const { clients: clientsData } = clients;

  const servicesSectionInViewWithMargin = useInView(servicesSectionRef, {
    margin: '-200px',
  });
  const projectsSectionInView = useInView(projectsSectionRef, {
    margin: '-200px',
  });
  const projectsSectionBgInView = useInView(projectsSectionBgRef, {
    margin: '-200px',
  });
  const clientsSectionInView = useInView(clientsSectionRef, {
    margin: '-300px',
  });
  const reviewsSectionInView = useInView(reviewsSectionRef, {
    margin: '-300px',
  });

  const shouldShowProjectsSectionBg =
    projectsSectionBgInView && !servicesSectionInViewWithMargin;
  const shouldShowClientsSectionContent =
    clientsSectionInView && !reviewsSectionInView;

  return (
    <Main
      projectsSectionRef={projectsSectionRef}
      projectsSectionInView={projectsSectionInView}
      projectsSectionBgRef={projectsSectionBgRef}
      projectsSectionBgInView={shouldShowProjectsSectionBg}
      servicesSectionInViewWithMargin={servicesSectionInViewWithMargin}
      servicesSectionRef={servicesSectionRef}
      shouldShowClientsSectionContent={shouldShowClientsSectionContent}
      clientsSectionRef={clientsSectionRef}
      clientsSectionInView={clientsSectionInView}
      reviewsSectionRef={reviewsSectionRef}
      clients={clientsData}
    />
  );
};

export default MainPage;
