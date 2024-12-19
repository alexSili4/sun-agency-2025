import { FC, useState } from 'react';
import LangRadioBtn from '@GeneralComponents/LangRadioBtn';
import { Container } from './LangsMenu.styled';
import { IProps } from './LangsMenu.types';
import { InputChangeEvent } from '@/types/types';

const LangsMenu: FC<IProps> = ({ langs }) => {
  const [currentLang, setCurrentLang] = useState<string>(() => langs[0]);

  const onLangRadioBtnChange = (e: InputChangeEvent) => {
    setCurrentLang(e.currentTarget.value);
  };

  return (
    <Container>
      {langs.map((lang) => {
        const checked = lang === currentLang;

        return (
          <LangRadioBtn
            key={lang}
            value={lang}
            onChange={onLangRadioBtnChange}
            checked={checked}
          />
        );
      })}
    </Container>
  );
};

export default LangsMenu;
