import { OnAnchorClickFunc, OnInputChangeFunc } from '@/types/functions.types';

export interface IProps {
  currentLang: string;
  onClick: OnAnchorClickFunc;
  onChange: OnInputChangeFunc;
}
