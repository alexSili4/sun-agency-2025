import { CompanyClients } from '@/types/clients.types';
import { RefDivObject } from '@/types/types';

export interface IProps {
  sectionRef: RefDivObject;
  shouldShowSectionContent: boolean;
  clients: CompanyClients;
}
