import { FC } from 'react';
import { IProps } from './SmoothFadeUpModalWin.types';
import { useModalWin } from '@/hooks';
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
}) => {
  const { hideModalWin, modalRoot } = useModalWin(setModalWin);

  return (
    <ModalWin modalRoot={modalRoot}>
      <MotionDiv
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, y: -200, transition: { duration: 0.4 } }}
        zIndex={zIndex}
      >
        <BackdropWrap backgroundColor={backgroundColor}>
          <Backdrop onClick={hideModalWin}>{children}</Backdrop>
        </BackdropWrap>
      </MotionDiv>
    </ModalWin>
  );
};

export default SmoothFadeUpModalWin;
