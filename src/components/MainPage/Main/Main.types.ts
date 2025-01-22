import { RefDivObject } from '@/types/types';

export interface IProps {
  // projects
  projectsSectionBgRef: RefDivObject;
  projectsSectionBgInView: boolean;
  // services
  servicesSectionInViewWithMargin: boolean;
  // clients
  clientsSectionInView: boolean;
  clientsSectionRef: RefDivObject;
  // other
  shouldShowClientsSectionContent: boolean;
  servicesSectionRef: RefDivObject;
  reviewsSectionRef: RefDivObject;
}
