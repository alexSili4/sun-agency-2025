import { FC } from 'react';
import { IProps } from './HeaderLangRadioBtn.types';
import {
  Container,
  RadioBtn,
  TitleWrap,
  Title,
} from './HeaderLangRadioBtn.styled';

const LangRadioBtn: FC<IProps> = ({
  value,
  onChange,
  checked,
  deskWidth,
  mobileWidth,
  isFullMenu,
  isLastRadioBtn = false,
}) => {
  return (
    <Container isLastRadioBtn={isLastRadioBtn} isFullMenu={isFullMenu}>
      <RadioBtn
        type='checkbox'
        name='lang'
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <TitleWrap
        deskWidth={deskWidth}
        mobileWidth={mobileWidth}
        isFullMenu={isFullMenu}
      >
        <Title isFullMenu={isFullMenu}>{value}</Title>
      </TitleWrap>
    </Container>
  );
};

export default LangRadioBtn;
