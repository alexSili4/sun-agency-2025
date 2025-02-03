import Main from '@MainPageComponents/Main';
import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
// import { useInView } from 'framer-motion';

const MainPage: FC = () => {
  const projectsSectionBgRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  // const reviewsSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionInViewWithMargin = useInView(servicesSectionRef, {
    margin: '-200px',
  });
  const projectsSectionBgInView = useInView(projectsSectionBgRef, {
    margin: '-200px',
  });
  // const clientsSectionRef = useRef<HTMLDivElement>(null);
  // const reviewsSectionInView = useInView(reviewsSectionRef, {
  //   margin: '-300px',
  // });
  // const clientsSectionInView = useInView(clientsSectionRef, {
  //   margin: '-300px',
  // });
  const shouldShowProjectsSectionBg =
    projectsSectionBgInView && !servicesSectionInViewWithMargin;
  // const shouldShowClientsSectionContent =
  //   clientsSectionInView && !reviewsSectionInView;

  return (
    <Main
      projectsSectionBgRef={projectsSectionBgRef}
      projectsSectionBgInView={shouldShowProjectsSectionBg}
      //   servicesSectionInViewWithMargin={servicesSectionInViewWithMargin}
      //   servicesSectionRef={servicesSectionRef}
      //   shouldShowClientsSectionContent={shouldShowClientsSectionContent}
      //   reviewsSectionRef={reviewsSectionRef}
      //   clientsSectionRef={clientsSectionRef}
      //   clientsSectionInView={clientsSectionInView}
    />
  );
};

export default MainPage;
