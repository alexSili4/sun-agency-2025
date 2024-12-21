import { FC } from 'react';
import { Container } from './MenuModalWin.styled';
import ServicesList from '@GeneralComponents/ServicesList';
import { IProps } from './MenuModalWin.types';
import NavLinksList from '@GeneralComponents/NavLinksList';

const MenuModalWin: FC<IProps> = ({ onClick }) => {
  return (
    <Container>
      <ServicesList onClick={onClick} />
      <NavLinksList onClick={onClick} />
    </Container>
  );
};

export default MenuModalWin;
