import { FC } from 'react';
import { Container, LangsRadioBtnWrap } from './LangsMenu.styled';
import { Langs } from '@/constants';
import { IProps } from './LangsMenu.types';
// ----- components
import LangRadioBtn from '@GeneralComponents/LangRadioBtn';

const LangsMenu: FC<IProps> = ({
  currentLang,
  onChange,
  isFullMenu = false,
  isPositionAbsolute = false,
  left = '0px',
  top = '0px',
}) => {
  const isUaLang = currentLang === Langs.ua;
  const isEngLang = currentLang === Langs.eng;
  const isDeLang = currentLang === Langs.de;

  return (
    <Container
      isFullMenu={isFullMenu}
      isPositionAbsolute={isPositionAbsolute}
      left={left}
      top={top}
    >
      <LangsRadioBtnWrap isFullMenu={isFullMenu}>
        <LangRadioBtn
          width={36}
          height={35}
          value={Langs.ua}
          onChange={onChange}
          checked={isUaLang}
          isFullMenu={isFullMenu}
        />
        <LangRadioBtn
          height={35}
          width={35}
          value={Langs.de}
          onChange={onChange}
          checked={isDeLang}
          isFullMenu={isFullMenu}
        />
      </LangsRadioBtnWrap>
      <LangRadioBtn
        width={46}
        height={35}
        value={Langs.eng}
        onChange={onChange}
        checked={isEngLang}
        isFullMenu={isFullMenu}
        isLastRadioBtn
      />
    </Container>
  );
};

export default LangsMenu;
