import { CompanyClients } from '@/types/clients.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  // projects
  projectsSectionRef: RefDivObject;
  projectsSectionInView: boolean;
  projectsSectionBgRef: RefDivObject;
  projectsSectionBgInView: boolean;
  // services
  servicesSectionInViewWithMargin: boolean;
  // clients
  clientsSectionInView: boolean;
  clientsSectionRef: RefDivObject;
  clients: CompanyClients;
  // other
  shouldShowClientsSectionContent: boolean;
  servicesSectionRef: RefDivObject;
  reviewsSectionRef: RefDivObject;
}
