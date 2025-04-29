import { FC } from 'react';
import { Link } from './HeroSectionContactsInfoLink.styled';
import { IProps } from './HeroSectionContactsInfoLink.types';

const HeroSectionContactsInfoLink: FC<IProps> = ({
  children,
  href,
  linkRef,
  isMaxWidth = false,
}) => {
  return (
    <Link
      ref={linkRef}
      href={href}
      target='_blank'
      rel='noopener noreferrer nofollow'
      isMaxWidth={isMaxWidth}
    >
      {children}
    </Link>
  );
};

export default HeroSectionContactsInfoLink;
