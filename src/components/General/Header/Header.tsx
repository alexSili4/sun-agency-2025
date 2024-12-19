import { FC } from 'react';
import { StyledHeader } from './Header.styled';
import NavLinks from '@GeneralComponents/NavLinks';
import ContactsInfo from '@GeneralComponents/ContactsInfo';

const Header: FC = () => {
  return (
    <StyledHeader>
      <NavLinks />
      <ContactsInfo />
    </StyledHeader>
  );
};

export default Header;
