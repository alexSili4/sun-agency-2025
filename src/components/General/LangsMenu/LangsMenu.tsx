import { FC, useState } from 'react';
import LangRadioBtn from '@GeneralComponents/LangRadioBtn';
import { Container, LangsRadioBtnWrap } from './LangsMenu.styled';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Langs } from '@/constants';
import { IProps } from './LangsMenu.types';

const LangsMenu: FC<IProps> = ({ isFullMenu = false }) => {
  const [currentLang, setCurrentLang] = useState<string>(() => Langs.ua);

  const isUaLang = currentLang === Langs.ua;
  const isEngLang = currentLang === Langs.eng;
  const isDeLang = currentLang === Langs.de;

  const onLangRadioBtnChange = (e: InputChangeEvent) => {
    makeBlur(e.currentTarget);

    setCurrentLang(e.currentTarget.value);
  };

  return (
    <Container>
      <LangsRadioBtnWrap isFullMenu={isFullMenu}>
        <LangRadioBtn
          width={36}
          height={35}
          value={Langs.ua}
          onChange={onLangRadioBtnChange}
          checked={isUaLang}
          isFullMenu={isFullMenu}
        />
        <LangRadioBtn
          height={35}
          width={35}
          value={Langs.de}
          onChange={onLangRadioBtnChange}
          checked={isDeLang}
          isFullMenu={isFullMenu}
        />
      </LangsRadioBtnWrap>
      <LangRadioBtn
        width={46}
        height={35}
        value={Langs.eng}
        onChange={onLangRadioBtnChange}
        checked={isEngLang}
        isFullMenu={isFullMenu}
        isLastRadioBtn
      />
    </Container>
  );
};

export default LangsMenu;
