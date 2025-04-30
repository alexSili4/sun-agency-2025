import { OnBtnClickFunc } from '@/types/functions.types';

export interface IProps {
  isDefaultBtnTitle?: boolean;
  onClick?: OnBtnClickFunc;
  btnTitle?: string;
  isFake?: boolean;
  isShowList?: boolean;
}

export interface IStyledButtonProps {
  isFake: boolean;
  isShowList: boolean;
}

export interface IStyledBtnTitleProps {
  isDefaultBtnTitle: boolean;
}
