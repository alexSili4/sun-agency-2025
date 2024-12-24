import { FC, useEffect, useRef } from 'react';
import { IProps } from './SmoothFadeUpModalWin.types';
import { useIsScrollingUp, useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents//ModalWin';
import {
  Backdrop,
  BackdropWrap,
  MotionDiv,
} from './SmoothFadeUpModalWin.styled';

const SmoothFadeUpModalWin: FC<IProps> = ({
  backgroundColor,
  setModalWin,
  children,
  zIndex = 0,
  duration = 0.6,
  changeShouldHideMenuBtn,
}) => {
  const { hideModalWin, modalRoot } = useModalWin(setModalWin);
  const backdropWrapRef = useRef<HTMLDivElement>(null);
  const { isScrolling, isScrollingUp } = useIsScrollingUp({
    element: backdropWrapRef,
  });
  const shouldHideMenuBtn = isScrolling && !isScrollingUp;

  useEffect(() => {
    changeShouldHideMenuBtn && changeShouldHideMenuBtn(shouldHideMenuBtn);
  }, [changeShouldHideMenuBtn, shouldHideMenuBtn]);

  return (
    <ModalWin modalRoot={modalRoot}>
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
    </ModalWin>
  );
};

export default SmoothFadeUpModalWin;
