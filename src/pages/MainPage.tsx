import Main from '@MainPageComponents/Main';
import { FC, useRef } from 'react';
import { useInView } from 'motion/react';

const MainPage: FC = () => {
  const projectsListContainerRef = useRef<HTMLDivElement>(null);
  const projectsSectionGradientRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionInView = useInView(servicesSectionRef);
  const projectsSectionGradientInView = useInView(projectsSectionGradientRef, {
    margin: '-200px',
  });
  const projectsListContainerInView = useInView(projectsListContainerRef, {
    margin: servicesSectionInView ? '-400px' : '-200px',
  });
  const shouldShowGradient =
    projectsSectionGradientInView && !servicesSectionInView;

  return (
    <Main
      projectsSectionGradientRef={projectsSectionGradientRef}
      shouldShowGradient={shouldShowGradient}
      projectsListContainerRef={projectsListContainerRef}
      projectsListContainerInView={projectsListContainerInView}
      servicesSectionInView={servicesSectionInView}
      servicesSectionRef={servicesSectionRef}
    />
  );
};

export default MainPage;
