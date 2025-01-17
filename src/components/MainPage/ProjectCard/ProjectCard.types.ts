import { Strings } from '@/types/types';

export interface IProps {
  projectPath: string;
  img: string;
  name: string;
  tags: Strings;
  year: number;
  isNewProject?: boolean;
}

export interface IStyledProps {
  isNewProject: boolean;
}
