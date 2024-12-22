import { FC } from 'react';
import SmoothFadeUpModalWin from '@AnimationBlocks/SmoothFadeUpModalWin';
import { IProps } from './AnimatedMenuModalWin.types';
import MenuModalWin from '@GeneralComponents/MenuModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';

const AnimatedMenuModalWin: FC<IProps> = ({
  showModalWin,
  setModalWin,
  backgroundColor,
  onClick,
  onChange,
  currentLang,
}) => {
  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <SmoothFadeUpModalWin
        setModalWin={setModalWin}
        backgroundColor={backgroundColor}
      >
        <MenuModalWin
          currentLang={currentLang}
          onChange={onChange}
          onClick={onClick}
        />
      </SmoothFadeUpModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedMenuModalWin;
