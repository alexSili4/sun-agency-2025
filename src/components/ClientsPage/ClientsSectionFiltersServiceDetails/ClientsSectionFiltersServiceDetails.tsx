import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersServiceDetails.types';
import {
  Container,
  Input,
  Title,
  TitleWrap,
} from './ClientsSectionFiltersServiceDetails.styled';

const ClientsSectionFiltersServiceDetails: FC<IProps> = ({
  isChecked,
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <Container>
      <TitleWrap>
        <Title>{label}</Title>
      </TitleWrap>
      <Input
        name={name}
        value={value}
        type='radio'
        checked={isChecked}
        onChange={onChange}
      />
    </Container>
  );
};

export default ClientsSectionFiltersServiceDetails;
