import { FC } from 'react';
import SmoothFadeUpModalWin from '@AnimationBlocks/SmoothFadeUpModalWin';
import { IProps } from './AnimatedMenuModalWin.types';
import MenuModalWin from '@GeneralComponents/MenuModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import { useModalWin } from '@/hooks';
import ModalWin from '@GeneralComponents/ModalWin';

const AnimatedMenuModalWin: FC<IProps> = ({
  showModalWin,
  setModalWinState,
  backgroundColor,
  onClick,
  onChange,
  currentLang,
  changeShouldHideMenuBtn,
}) => {
  const { hideModalWin, modalRoot } = useModalWin({
    setModalWinState,
    showModalWin,
  });

  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <ModalWin modalRoot={modalRoot}>
        <SmoothFadeUpModalWin
          hideModalWin={hideModalWin}
          backgroundColor={backgroundColor}
          changeShouldHideMenuBtn={changeShouldHideMenuBtn}
        >
          <MenuModalWin
            currentLang={currentLang}
            onChange={onChange}
            onClick={onClick}
          />
        </SmoothFadeUpModalWin>
      </ModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedMenuModalWin;
