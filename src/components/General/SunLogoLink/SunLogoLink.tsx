import { FC } from 'react';
import { PagePaths } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { LogoLink } from './SunLogoLink.styled';

const SunLogoLink: FC = () => {
  return (
    <LogoLink to={PagePaths.root}>
      <Logo />
    </LogoLink>
  );
};

export default SunLogoLink;
