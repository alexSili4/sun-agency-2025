import { FC } from 'react';
import { IProps } from './HeroSectionContactsInfoLinkContent.types';
import { Container } from './HeroSectionContactsInfoLinkContent.styled';

const HeroSectionContactsInfoLinkContent: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HeroSectionContactsInfoLinkContent;
