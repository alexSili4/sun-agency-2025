import { FC } from 'react';
import HeroSectionContactsInfoEmail from '@ContactsPageComponents/HeroSectionContactsInfoEmail';
import { List, ListItem } from './HeroSectionContactsInfo.styled';
import HeroSectionContactsInfoPhone from '@ContactsPageComponents/HeroSectionContactsInfoPhone';
import HeroSectionContactsInfoAddress from '@ContactsPageComponents/HeroSectionContactsInfoAddress';
import { IProps } from './HeroSectionContactsInfo.types';

const HeroSectionContactsInfo: FC<IProps> = ({
  contactLength,
  email,
  phone,
  addressLink,
  addressText,
}) => {
  return (
    <List>
      <ListItem contacts={contactLength}>
        <HeroSectionContactsInfoEmail email={email} />
      </ListItem>
      <ListItem contacts={contactLength}>
        <HeroSectionContactsInfoPhone phone={phone} />
      </ListItem>
      <ListItem contacts={contactLength}>
        <HeroSectionContactsInfoAddress link={addressLink} text={addressText} />
      </ListItem>
    </List>
  );
};

export default HeroSectionContactsInfo;
