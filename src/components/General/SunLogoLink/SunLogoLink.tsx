import { FC } from 'react';
import { PagePaths } from '@/constants';
import Logo from '@/icons/logo.svg?react';
import { LogoLink } from './SunLogoLink.styled';
import { IProps } from './SunLogoLink.types';

const SunLogoLink: FC<IProps> = ({
  showMenuModalWin = false,
  isFooter = false,
}) => {
  return (
    <LogoLink
      to={PagePaths.root}
      showMenuModalWin={showMenuModalWin}
      isFooter={isFooter}
    >
      <Logo />
    </LogoLink>
  );
};

export default SunLogoLink;
