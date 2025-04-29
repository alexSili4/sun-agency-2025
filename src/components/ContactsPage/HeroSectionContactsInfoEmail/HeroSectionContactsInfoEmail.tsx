import { FC, useRef } from 'react';
import { LuMail } from 'react-icons/lu';
import { theme } from '@/constants';
import { IProps } from './HeroSectionContactsInfoEmail.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, copyToClipboard } from '@/utils';
import CopyBtn from '@ContactsPageComponents/CopyBtn';
import HeroSectionContactsInfoCard from '@ContactsPageComponents/HeroSectionContactsInfoCard';
import HeroSectionContactsInfoLink from '@ContactsPageComponents/HeroSectionContactsInfoLink';
import HeroSectionContactsInfoLinkContent from '@ContactsPageComponents/HeroSectionContactsInfoLinkContent';

const HeroSectionContactsInfoEmail: FC<IProps> = ({ email }) => {
  const validEmail = `mailto:${email}`;
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
      <HeroSectionContactsInfoLink
        linkRef={linkRef}
        href={validEmail}
        isMaxWidth
      >
        {email}
      </HeroSectionContactsInfoLink>
      <CopyBtn onClick={onCopyBtnClick} />
    </HeroSectionContactsInfoLinkContent>
  );
  const icon = <LuMail size={theme.iconSizes.contactsLabel} />;

  return (
    <HeroSectionContactsInfoCard
      title='Email'
      icon={icon}
      content={content}
      isAroundTheClock
    />
  );
};

export default HeroSectionContactsInfoEmail;
