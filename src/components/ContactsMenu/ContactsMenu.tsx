import { FC, useState } from 'react';
import {
  ContactBtn,
  ContactBtnIcon,
  ContactBtnTitle,
} from './ContactsMenu.styled';
import GlowingContainer from '@/components/GlowingContainer';
import AnimatedContactsModalWin from '@AnimationBlocks/AnimatedContactsModalWin';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';

const ContactsMenu: FC = () => {
  const [showContactsModalWin, setShowContactsModalWin] =
    useState<boolean>(false);

  const toggleShowContactsModalWin = () => {
    setShowContactsModalWin((prevState) => !prevState);
  };

  const onContactBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowContactsModalWin();
  };

  return (
    <>
      <GlowingContainer borderRadius='16px'>
        <ContactBtn type='button' onClick={onContactBtnClick}>
          <ContactBtnIcon></ContactBtnIcon>
          <ContactBtnTitle>Контакт</ContactBtnTitle>
        </ContactBtn>
      </GlowingContainer>
      <AnimatedContactsModalWin
        setModalWin={toggleShowContactsModalWin}
        showModalWin={showContactsModalWin}
      />
    </>
  );
};

export default ContactsMenu;
