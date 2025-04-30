import { theme } from '@/constants';
import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { BtnTitle, Button } from './HeroSectionContactsFormServicesBtn.styled';
import { IProps } from './HeroSectionContactsFormServicesBtn.types';

const HeroSectionContactsFormServicesBtn: FC<IProps> = ({
  onClick,
  btnTitle,
  isShowList = false,
  isFake = false,
  isDefaultBtnTitle = false,
}) => {
  return (
    <Button
      type='button'
      onClick={onClick}
      isFake={isFake}
      isShowList={isShowList}
    >
      <BtnTitle isDefaultBtnTitle={isDefaultBtnTitle}>{btnTitle}</BtnTitle>
      <FaChevronDown size={theme.iconSizes.contactsServices} />
    </Button>
  );
};

export default HeroSectionContactsFormServicesBtn;
