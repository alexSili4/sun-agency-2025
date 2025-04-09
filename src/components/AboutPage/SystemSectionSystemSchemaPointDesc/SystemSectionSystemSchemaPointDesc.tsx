import { FC } from 'react';
import { IProps } from './SystemSectionSystemSchemaPointDesc.types';
import {
  Container,
  Marker,
  Text,
  TextWrap,
} from './SystemSectionSystemSchemaPointDesc.styled';

const SystemSectionSystemSchemaPointDesc: FC<IProps> = ({ text }) => {
  return (
    <Container>
      <TextWrap>
        <Marker></Marker>
        <Text>{text}</Text>
      </TextWrap>
    </Container>
  );
};

export default SystemSectionSystemSchemaPointDesc;
