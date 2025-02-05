import { NavLinks } from '@/types/navLinks';
import { OnAnchorClickFunc } from '@/types/types';

export interface IProps {
  onClick: OnAnchorClickFunc;
  navLinks: NavLinks;
}
