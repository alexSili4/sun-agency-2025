import { FC } from 'react';
import {
  Container,
  IconWrap,
  Messengers,
  PhoneWrap,
} from './HeroSectionContactsInfoPhone.styled';
import { theme } from '@/constants';
import { IProps } from './HeroSectionContactsInfoPhone.types';
import HeroSectionContactsInfoCard from '@ContactsPageComponents/HeroSectionContactsInfoCard';
import { LuPhone } from 'react-icons/lu';
import { RiTelegram2Fill } from 'react-icons/ri';
import Viber from '@/icons/contacts/viber.svg?react';
import { getValidPhoneNumber } from '@/utils';
import HeroSectionContactsInfoLink from '@ContactsPageComponents/HeroSectionContactsInfoLink';

const HeroSectionContactsInfoPhone: FC<IProps> = ({ phone }) => {
  const content = (
    <Container>
      {phone.map(({ tg, isViber, number }) => {
        const isTg = Boolean(tg);
        const shouldShowMessengers = isTg || isViber;

        const validPhoneNumber = getValidPhoneNumber(number);
        const linkPhoneNumber = `tel:+${validPhoneNumber}`;
        const viber = `viber://chat?number=%2B${validPhoneNumber}`;

        return (
          <PhoneWrap>
            <HeroSectionContactsInfoLink href={linkPhoneNumber} isMaxWidth>
              {number}
            </HeroSectionContactsInfoLink>
            {shouldShowMessengers && (
              <Messengers>
                {tg && (
                  <HeroSectionContactsInfoLink href={tg}>
                    <IconWrap>
                      <RiTelegram2Fill size={theme.iconSizes.contactsTg} />
                    </IconWrap>
                  </HeroSectionContactsInfoLink>
                )}
                {isViber && (
                  <HeroSectionContactsInfoLink href={viber}>
                    <IconWrap>
                      <Viber />
                    </IconWrap>
                  </HeroSectionContactsInfoLink>
                )}
              </Messengers>
            )}
          </PhoneWrap>
        );
      })}
    </Container>
  );
  const icon = <LuPhone size={theme.iconSizes.contactsLabel} />;

  return (
    <HeroSectionContactsInfoCard
      title='Телефон'
      icon={icon}
      content={content}
    />
  );
};

export default HeroSectionContactsInfoPhone;
