import { FC } from 'react';
import { IProps } from './AnimatedClientDetailsModalWin.types';
import { useModalWin } from '@/hooks';
// ----- components
import AnimatedClientDetailsModalWinContent from '@AnimationBlocks/AnimatedClientDetailsModalWinContent';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import ModalWin from '@GeneralComponents/ModalWin';

const AnimatedClientDetailsModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
  children,
}) => {
  const { hideModalWin, modalRoot } = useModalWin({
    setModalWinState,
    showModalWin,
  });

  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <ModalWin modalRoot={modalRoot}>
        <AnimatedClientDetailsModalWinContent
          setModalWinState={setModalWinState}
          hideModalWin={hideModalWin}
        >
          {children}
        </AnimatedClientDetailsModalWinContent>
      </ModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedClientDetailsModalWin;
