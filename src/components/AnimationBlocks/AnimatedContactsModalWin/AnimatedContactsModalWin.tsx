import { FC } from 'react';
import SmoothFadeUpModalWin from '@AnimationBlocks/SmoothFadeUpModalWin';
import { IProps } from './AnimatedContacts.types';
import ContactsModalWin from '@GeneralComponents/ContactsModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';

const AnimatedContactsModalWin: FC<IProps> = ({
  showModalWin,
  setModalWin,
}) => {
  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <SmoothFadeUpModalWin setModalWin={setModalWin}>
        <ContactsModalWin />
      </SmoothFadeUpModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedContactsModalWin;
