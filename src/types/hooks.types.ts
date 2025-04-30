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
  OnDivClickFunc,
  OnSwiperAutoplayTimeLeft,
  OnSwiperFunc,
} from './functions.types';
import { Process } from './about.types';

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
