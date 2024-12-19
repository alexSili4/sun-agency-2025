import { FC } from 'react';
import { IProps } from './LangRadioBtn.types';
import { Container, RadioBtn, Title } from './LangRadioBtn.styled';

const LangRadioBtn: FC<IProps> = ({ value, onChange, checked }) => {
  return (
    <Container>
      <RadioBtn
        type='radio'
        name='lang'
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Title>{value}</Title>
    </Container>
  );
};

export default LangRadioBtn;
