import { ISunAgencyTeamDataInfo } from '@/types/projects.types';
import { Strings } from '@/types/types';

export interface IProps {
  clientTeamTitle: string;
  clientTeam: Strings;
  sunAgencyTeamTitle: string;
  sunAgencyTeam: ISunAgencyTeamDataInfo;
}
