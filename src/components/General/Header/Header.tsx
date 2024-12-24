import { FC, useState } from 'react';
import { Container, StyledHeader } from './Header.styled';
import NavMenu from '@GeneralComponents/NavMenu';
import ContactsInfo from '@GeneralComponents/ContactsInfo';
import { Langs } from '@/constants';
import { makeBlur } from '@/utils';
import { InputChangeEvent } from '@/types/types';
import GeneralContainer from '@GeneralComponents/GeneralContainer';

const Header: FC = () => {
  const [currentLang, setCurrentLang] = useState<string>(() => Langs.ua);

  const onLangRadioBtnChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);

    setCurrentLang(e.currentTarget.value);
  };

  return (
    <StyledHeader>
      <GeneralContainer>
        <Container>
          <NavMenu currentLang={currentLang} onChange={onLangRadioBtnChange} />
          <ContactsInfo
            currentLang={currentLang}
            onChange={onLangRadioBtnChange}
          />
        </Container>
      </GeneralContainer>
    </StyledHeader>
  );
};

export default Header;
