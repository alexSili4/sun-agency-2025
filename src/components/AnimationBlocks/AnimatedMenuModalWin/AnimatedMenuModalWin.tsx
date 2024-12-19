import { FC } from 'react';
import SmoothFadeUpModalWin from '@AnimationBlocks/SmoothFadeUpModalWin';
import { IProps } from './AnimatedMenuModalWin.types';
import MenuModalWin from '@GeneralComponents/MenuModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';

const AnimatedMenuModalWin: FC<IProps> = ({ showModalWin, setModalWin }) => {
  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <SmoothFadeUpModalWin setModalWin={setModalWin}>
        <MenuModalWin />
      </SmoothFadeUpModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedMenuModalWin;
