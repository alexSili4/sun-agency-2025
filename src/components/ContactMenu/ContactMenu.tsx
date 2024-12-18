import { FC } from 'react';
import {
  ContactBtn,
  ContactBtnIcon,
  ContactBtnTitle,
} from './ContactMenu.styled';
import ShimmerWrap from '@/components/ShimmerWrap';

const ContactMenu: FC = () => {
  return (
    <ShimmerWrap rounded={1} width={138} height={64}>
      <ContactBtn>
        <ContactBtnIcon></ContactBtnIcon>
        <ContactBtnTitle>Контакт</ContactBtnTitle>
      </ContactBtn>
    </ShimmerWrap>
  );
};

export default ContactMenu;
