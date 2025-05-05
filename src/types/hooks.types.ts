import { Variants } from 'framer-motion';
import {
  ElementOrNull,
  NumberOrNull,
  RefDivObject,
  RefFunc,
  RefLottieObject,
} from './types';
import {
  Func,
  OnBtnClickFunc,
  OnDivClickFunc,
  OnInputChangeFunc,
  OnSwiperAutoplayTimeLeft,
  OnSwiperFunc,
} from './functions.types';
import { Process } from './about.types';
import { SetURLSearchParams } from 'react-router-dom';

export interface IUpdateSearchParamsProps {
  key: string;
  value: string;
}

export interface IUseSetSearchParams {
  updateSearchParams: (data: IUpdateSearchParamsProps) => void;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export interface IUseModalWinProps {
  setModalWinState: Func;
  showModalWin: boolean;
}

export interface IUseModalWin {
  modalRoot: ElementOrNull;
  hideModalWin: OnDivClickFunc;
}

export interface IUseIsScrollingUpProps {
  element: RefDivObject;
}

export interface IUseIsScrollingUp {
  isScrollingUp: boolean;
  isScrolling: boolean;
}

export interface IUseScrollPercentage {
  ref: RefFunc;
  percentage: number;
}

export interface IUseIsHoverOrFocus {
  isHoverOrFocus: boolean;
  onItemFocus: Func;
  onItemBlur: Func;
}

export interface IUseLottieContainerInView {
  containerRef: RefDivObject;
  lottieRef: RefLottieObject;
}

export interface IUseProcessStepsListAnimationProps {
  containerRef: RefDivObject;
  process: Process;
}

export interface IUseProcessStepsListAnimation {
  currentStep: number;
  textVariants: Variants;
  activePointRotate: number;
}

export interface IUsePrinciplesSlider {
  onSwiper: OnSwiperFunc;
  onAutoplayTimeLeft: OnSwiperAutoplayTimeLeft;
  activeIndex: number;
  size: NumberOrNull;
  progress: number;
}

export interface IUseActivePointAnimationProps {
  processImgContainerRef: RefDivObject;
  principlesSectionRef: RefDivObject;
  principlesSliderBgRef: RefDivObject;
}

export interface IUseActivePointAnimation {
  activePointTranslateY: number;
}

export interface IUseContactsGlowingElementSize {
  glowingElementGlowHeight: number;
  glowingElementGlowWidth: number;
  glowingElementWidth: number;
}

export interface IUseClientsFilter {
  onFilterChange: OnInputChangeFunc;
  filter: string;
}

export interface IUseDropdown {
  isShowList: boolean;
  listHeight: number;
  onBackdropClick: Func;
  onShowListBtnClick: OnBtnClickFunc;
}
