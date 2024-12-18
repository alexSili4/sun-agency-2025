import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import NavLinks from '@/components/NavLinks';
import ContactsInfo from '@/components/ContactsInfo';

const Header: FC = () => {
  return (
    <StyledHeader>
      <NavLinks />
      <ContactsInfo />
    </StyledHeader>
  );
};

export default Header;
