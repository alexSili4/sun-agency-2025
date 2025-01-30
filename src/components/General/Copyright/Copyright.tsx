import { FC } from 'react';
import { Text } from './Copyright.styled';
import { IProps } from './Copyright.types';

const Copyright: FC<IProps> = ({ isHiddenOnMobile = false }) => {
  return <Text isHiddenOnMobile={isHiddenOnMobile}>© 2024 Сонце</Text>;
};

export default Copyright;
