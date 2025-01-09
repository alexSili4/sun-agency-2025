import { FC } from 'react';
import GlowingBtnWrap from '@GeneralComponents/GlowingBtnWrap';
import { Button } from './GlowingCloseClientDetailsModalWinBtn.styled';
import { IProps } from './GlowingCloseClientDetailsModalWinBtn.types';
import { IoMdClose } from 'react-icons/io';
import { theme } from '@/constants';

const GlowingCloseClientDetailsModalWinBtn: FC<IProps> = ({ onClick }) => {
  return (
    <GlowingBtnWrap
      borderRadius='50%'
      top='71px'
      right='32px'
      isPositionAbsolute
      isSubduedLighting
    >
      <Button type='button' onClick={onClick}>
        <IoMdClose size={theme.iconSizes.closeClientDetailsBtn} />
      </Button>
    </GlowingBtnWrap>
  );
};

export default GlowingCloseClientDetailsModalWinBtn;
