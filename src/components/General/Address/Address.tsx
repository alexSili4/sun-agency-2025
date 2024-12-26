import { FC } from 'react';
import {
  AddressLink,
  Container,
  StyledLink,
  Title,
  AddressItem,
  PhonesList,
  PhonesListItem,
} from './Address.styled';

const Address: FC = () => {
  return (
    <Container>
      <AddressItem>
        <Title>Чекаємо на ваш дзвінок:</Title>
        <PhonesList>
          <PhonesListItem>
            <StyledLink href='tel:+380683578733'>+38 068 357 8733</StyledLink>
          </PhonesListItem>
          <PhonesListItem>
            <StyledLink href='tel:+380503109400'>+38 050 310 9400</StyledLink>
          </PhonesListItem>
        </PhonesList>
      </AddressItem>
      <AddressItem>
        <Title>Лист:</Title>
        <StyledLink href='mailto:hello@sun.agency'>hello@sun.agency</StyledLink>
      </AddressItem>
      <AddressItem>
        <AddressLink
          href='https://maps.app.goo.gl/ECQY42SvmE4U4Fs77'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          вул. Верхній Вал, 28/12, Київ. Україна.
        </AddressLink>
      </AddressItem>
    </Container>
  );
};

export default Address;
