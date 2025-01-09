import { FC, useEffect, useRef } from 'react';
import { IProps } from './SmoothFadeUpModalWin.types';
import { useIsScrollingUp } from '@/hooks';
import {
  Backdrop,
  BackdropWrap,
  MotionDiv,
} from './SmoothFadeUpModalWin.styled';

const SmoothFadeUpModalWin: FC<IProps> = ({
  backgroundColor,
  hideModalWin,
  children,
  zIndex = 0,
  duration = 0.6,
  changeShouldHideMenuBtn,
}) => {
  const backdropWrapRef = useRef<HTMLDivElement>(null);
  const { isScrolling, isScrollingUp } = useIsScrollingUp({
    element: backdropWrapRef,
  });
  const shouldHideMenuBtn = isScrolling && !isScrollingUp;

  useEffect(() => {
    changeShouldHideMenuBtn && changeShouldHideMenuBtn(shouldHideMenuBtn);
  }, [changeShouldHideMenuBtn, shouldHideMenuBtn]);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0, transition: { duration } }}
      exit={{ opacity: 0, y: -200, transition: { duration } }}
      zIndex={zIndex}
    >
      <BackdropWrap backgroundColor={backgroundColor} ref={backdropWrapRef}>
        <Backdrop onClick={hideModalWin}>{children}</Backdrop>
      </BackdropWrap>
    </MotionDiv>
  );
};

export default SmoothFadeUpModalWin;
