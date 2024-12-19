import { FC } from 'react';
import SmoothFadeUpModalWin from '@AnimationBlocks/SmoothFadeUpModalWin';
import { IProps } from './AnimatedContacts.types';
import ContactsModalWin from '@GeneralComponents/ContactsModalWin';
import AnimatedModalWin from '@AnimationBlocks/AnimatedModalWin';
import { theme } from '@/constants';

const AnimatedContactsModalWin: FC<IProps> = ({
  showModalWin,
  setModalWin,
  backgroundColor,
}) => {
  return (
    <AnimatedModalWin showModalWin={showModalWin}>
      <SmoothFadeUpModalWin
        zIndex={theme.zIndex.contactsModalWin}
        setModalWin={setModalWin}
        backgroundColor={backgroundColor}
      >
        <ContactsModalWin />
      </SmoothFadeUpModalWin>
    </AnimatedModalWin>
  );
};

export default AnimatedContactsModalWin;
