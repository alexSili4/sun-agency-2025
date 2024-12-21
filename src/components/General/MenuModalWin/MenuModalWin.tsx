import { FC } from 'react';
import { Container } from './MenuModalWin.styled';
import ServicesLinks from '@GeneralComponents/ServicesLinks';
import { IProps } from './MenuModalWin.types';

const MenuModalWin: FC<IProps> = ({ onClick }) => {
  return (
    <Container>
      <ServicesLinks onClick={onClick} />
    </Container>
  );
};

export default MenuModalWin;
