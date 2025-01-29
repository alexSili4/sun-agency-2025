import { FC } from 'react';
import { IProps } from './AtbHeroSectionBanner.types';
import { Container, Image } from './AtbHeroSectionBanner.styled';

const AtbHeroSectionBanner: FC<IProps> = ({ banner, borderRadius }) => {
  return (
    <Container banner={banner} borderRadius={borderRadius}>
      <Image src={banner} />
    </Container>
  );
};

export default AtbHeroSectionBanner;
