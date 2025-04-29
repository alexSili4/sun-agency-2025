import { theme } from '@/constants';
import { FC } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { IProps } from './CopyBtn.types';
import { Button } from './CopyBtn.styled';

const CopyBtn: FC<IProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <MdContentCopy size={theme.iconSizes.contactsCopy} />
    </Button>
  );
};

export default CopyBtn;
