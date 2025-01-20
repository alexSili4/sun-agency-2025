import { FC } from 'react';
import { IProps } from './LangRadioBtn.types';
import { Container, RadioBtn, TitleWrap, Title } from './LangRadioBtn.styled';

const LangRadioBtn: FC<IProps> = ({
  value,
  onChange,
  checked,
  height,
  width,
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
      <TitleWrap width={width} height={height} isFullMenu={isFullMenu}>
        <Title>{value}</Title>
      </TitleWrap>
    </Container>
  );
};

export default LangRadioBtn;
