import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormServices.types';
import HeroSectionContactsFormServicesList from '@ContactsPageComponents/HeroSectionContactsFormServicesList';
import { theme } from '@/constants';
import {
  Button,
  BtnTitle,
  BtnWrap,
  IconWrap,
} from './HeroSectionContactsFormServices.styled';
import { FaChevronDown } from 'react-icons/fa';

const HeroSectionContactsFormServices: FC<IProps> = ({
  services,
  btnTitle,
}) => {
  return (
    <BtnWrap>
      <Button type='button'>
        <BtnTitle>{btnTitle}</BtnTitle>
        <FaChevronDown size={theme.iconSizes.contactsServices} />
      </Button>
      {/* <HeroSectionContactsFormServicesList services={services} /> */}
    </BtnWrap>
  );
};

export default HeroSectionContactsFormServices;
