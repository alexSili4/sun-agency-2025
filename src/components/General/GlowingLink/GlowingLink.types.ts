import { PagePaths } from '@/constants';

export interface IProps {
  width: number;
  title: string;
  href: PagePaths;
  shouldHide?: boolean;
  isSubduedLighting?: boolean;
}

export interface IStyledProps {
  width: number;
}
