import { FC, useState } from 'react';
import LangRadioBtn from '@GeneralComponents/LangRadioBtn';
import { Container, LangsRadioBtnWrap } from './LangsMenu.styled';
import { InputChangeEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { Langs } from '@/constants';

const LangsMenu: FC = () => {
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
      <LangsRadioBtnWrap>
        <LangRadioBtn
          width={36}
          height={35}
          value={Langs.ua}
          onChange={onLangRadioBtnChange}
          checked={isUaLang}
        />
        <LangRadioBtn
          height={35}
          width={35}
          value={Langs.de}
          onChange={onLangRadioBtnChange}
          checked={isDeLang}
        />
      </LangsRadioBtnWrap>
      <LangRadioBtn
        width={46}
        height={35}
        value={Langs.eng}
        onChange={onLangRadioBtnChange}
        checked={isEngLang}
        isLastRadioBtn
      />
    </Container>
  );
};

export default LangsMenu;
