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
      initial={{ y: -200 }}
      animate={{ y: 0, transition: { duration: 0.6 } }}
      exit={{ y: -200, transition: { duration: 0.6 } }}
      zIndex={zIndex}
    >
      <BackdropWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        backgroundColor={backgroundColor}
        ref={backdropWrapRef}
      >
        <Backdrop onClick={hideModalWin}>{children}</Backdrop>
      </BackdropWrap>
    </MotionDiv>
  );
};

export default SmoothFadeUpModalWin;
