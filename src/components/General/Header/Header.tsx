import { FC, useState } from 'react';
import { StyledHeader } from './Header.styled';
import NavLinks from '@GeneralComponents/NavLinks';
import ContactsInfo from '@GeneralComponents/ContactsInfo';
import { Langs } from '@/constants';
import { makeBlur } from '@/utils';
import { InputChangeEvent } from '@/types/types';

const Header: FC = () => {
  const [currentLang, setCurrentLang] = useState<string>(() => Langs.ua);

  const onLangRadioBtnChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);

    setCurrentLang(e.currentTarget.value);
  };

  return (
    <StyledHeader>
      <NavLinks currentLang={currentLang} onChange={onLangRadioBtnChange} />
      <ContactsInfo currentLang={currentLang} onChange={onLangRadioBtnChange} />
    </StyledHeader>
  );
};

export default Header;
