import { FC } from 'react';
import { IProps } from './LangRadioBtn.types';
import { Container, RadioBtn, TitleWrap, Title } from './LangRadioBtn.styled';

const LangRadioBtn: FC<IProps> = ({
  value,
  onChange,
  checked,
  height,
  width,
  isLastRadioBtn = false,
}) => {
  return (
    <Container isLastRadioBtn={isLastRadioBtn}>
      <RadioBtn
        type='radio'
        name='lang'
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <TitleWrap width={width} height={height}>
        <Title>{value}</Title>
      </TitleWrap>
    </Container>
  );
};

export default LangRadioBtn;
