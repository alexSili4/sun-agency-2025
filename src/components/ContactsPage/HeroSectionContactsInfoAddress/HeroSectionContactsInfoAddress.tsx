import { theme } from '@/constants';
import { FC, useRef } from 'react';
import { FaRegMap } from 'react-icons/fa';
import CopyBtn from '@ContactsPageComponents/CopyBtn';
import { copyToClipboard, makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import HeroSectionContactsInfoLink from '@ContactsPageComponents/HeroSectionContactsInfoLink';
import HeroSectionContactsInfoCard from '@ContactsPageComponents/HeroSectionContactsInfoCard';
import { IProps } from './HeroSectionContactsInfoAddress.types';
import HeroSectionContactsInfoLinkContent from '@ContactsPageComponents/HeroSectionContactsInfoLinkContent';
import { LinkText } from './HeroSectionContactsInfoAddress.styled';
import { FiArrowUpRight } from 'react-icons/fi';

const HeroSectionContactsInfoAddress: FC<IProps> = ({ text, link }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const onCopyBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const link = linkRef.current;

    if (link) {
      const text = link.innerHTML;

      copyToClipboard(text);
    }
  };

  const content = (
    <HeroSectionContactsInfoLinkContent>
      <HeroSectionContactsInfoLink href={link} isMaxWidth>
        <LinkText ref={linkRef}>{text}</LinkText>{' '}
        <FiArrowUpRight size={theme.iconSizes.contactsArrow} />
      </HeroSectionContactsInfoLink>
      <CopyBtn onClick={onCopyBtnClick} />
    </HeroSectionContactsInfoLinkContent>
  );
  const icon = <FaRegMap size={theme.iconSizes.contactsLabel} />;

  return (
    <HeroSectionContactsInfoCard title='Адреса' icon={icon} content={content} />
  );
};

export default HeroSectionContactsInfoAddress;
