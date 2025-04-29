import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormErrorMessage.types';
import { Error } from './HeroSectionContactsFormErrorMessage.styled';

const HeroSectionContactsFormErrorMessage: FC<IProps> = ({ error }) => {
  return <Error dangerouslySetInnerHTML={{ __html: error }}></Error>;
};

export default HeroSectionContactsFormErrorMessage;
