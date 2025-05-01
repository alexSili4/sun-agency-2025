import { FC } from 'react';
import { IProps } from './HeroSectionContactsFormServicesList.types';
import {
  Container,
  List,
  ListWrap,
  Content,
  ListItem,
} from './HeroSectionContactsFormServicesList.styled';
import HeroSectionContactsFormService from '@ContactsPageComponents/HeroSectionContactsFormService';

const HeroSectionContactsFormServicesList: FC<IProps> = ({
  services,
  settings,
  isShow,
  contentRef,
  height,
}) => {
  return (
    <Container isShow={isShow} height={height}>
      <Content ref={contentRef}>
        <ListWrap>
          <List>
            {services.map(({ label, value }, index) => (
              <ListItem key={index}>
                <HeroSectionContactsFormService
                  label={label}
                  value={value}
                  settings={settings}
                />
              </ListItem>
            ))}
          </List>
        </ListWrap>
      </Content>
    </Container>
  );
};

export default HeroSectionContactsFormServicesList;
