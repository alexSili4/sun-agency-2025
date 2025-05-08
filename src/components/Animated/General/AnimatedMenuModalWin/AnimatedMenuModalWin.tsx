import { FC } from 'react';
import { IProps } from './AnimatedMenuModalWin.types';
import { useModalWin } from '@/hooks';
// ----- components
import SmoothFadeUpModalWin from '@AnimatedGeneralComponents/SmoothFadeUpModalWin';
import AnimatedModalWin from '@AnimatedGeneralComponents/AnimatedModalWin';
import MenuModalWin from '@GeneralComponents/MenuModalWin';
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
