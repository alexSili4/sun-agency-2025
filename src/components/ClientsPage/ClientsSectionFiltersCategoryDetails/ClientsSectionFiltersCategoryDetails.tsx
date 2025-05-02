import { FC } from 'react';
import { IProps } from './ClientsSectionFiltersCategoryDetails.types';
import {
  Input,
  Container,
  Title,
  TitleWrap,
} from './ClientsSectionFiltersCategoryDetails.styled';

const ClientsSectionFiltersCategoryDetails: FC<IProps> = ({
  isChecked,
  label,
  onChange,
  value,
}) => {
  return (
    <Container>
      <TitleWrap>
        <Title>{label}</Title>
      </TitleWrap>
      <Input
        name='clients-category'
        value={value}
        type='radio'
        checked={isChecked}
        onChange={onChange}
      />
    </Container>
  );
};

export default ClientsSectionFiltersCategoryDetails;
