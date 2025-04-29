import { NavLinks } from '@/types/navLinks';
import { OnAnchorClickFunc } from '@/types/functions.types';

export interface IProps {
  onClick: OnAnchorClickFunc;
  navLinks: NavLinks;
}
