export interface IProps {
  firstPart: string;
  secondPart: string;
  secondPartAccent: string;
  thirdPart: string;
  thirdPartAccent: string;
  fourthPart: string;
  isHiddenOnMobile?: boolean;
  isHiddenOnDesk?: boolean;
}

export interface IStyledTitleProps {
  isHiddenOnMobile: boolean;
  isHiddenOnDesk: boolean;
}
