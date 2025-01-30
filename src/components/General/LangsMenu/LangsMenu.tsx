import { FC } from 'react';
import { Container, LangsRadioBtnWrap } from './LangsMenu.styled';
import { langs } from '@/constants';
import { IProps } from './LangsMenu.types';
// ----- components
import LangRadioBtn from '@GeneralComponents/LangRadioBtn';

const LangsMenu: FC<IProps> = ({
  currentLang,
  onChange,
  isFullMenu = false,
  isPositionAbsolute = false,
  isHiddenOnMobile = false,
  isHidden = false,
  left = '0px',
  top = '0px',
}) => {
  const { de, eng, ua } = langs;

  const isUaLang = currentLang === ua.name;
  const isEngLang = currentLang === eng.name;
  const isDeLang = currentLang === de.name;

  return (
    <Container
      isFullMenu={isFullMenu}
      isPositionAbsolute={isPositionAbsolute}
      isHiddenOnMobile={isHiddenOnMobile}
      left={left}
      top={top}
      isHidden={isHidden}
    >
      <LangsRadioBtnWrap isFullMenu={isFullMenu}>
        <LangRadioBtn
          mobileWidth={ua.width.mobile}
          deskWidth={ua.width.desk}
          value={ua.name}
          onChange={onChange}
          checked={isUaLang}
          isFullMenu={isFullMenu}
        />
        <LangRadioBtn
          mobileWidth={de.width.mobile}
          deskWidth={de.width.desk}
          value={de.name}
          onChange={onChange}
          checked={isDeLang}
          isFullMenu={isFullMenu}
        />
      </LangsRadioBtnWrap>
      <LangRadioBtn
        mobileWidth={eng.width.mobile}
        deskWidth={eng.width.desk}
        value={eng.name}
        onChange={onChange}
        checked={isEngLang}
        isFullMenu={isFullMenu}
        isLastRadioBtn
      />
    </Container>
  );
};

export default LangsMenu;
