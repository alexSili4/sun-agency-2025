import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './ServiceItem.types';
import {
  Container,
  Image,
  Title,
  DetailsWrap,
  TitleWrap,
  Number,
  GlowImg,
} from './ServiceItem.styled';
import ServiceItemTagsList from '@MainPageComponents/ServiceItemTagsList';
import serviceGlow from '@/images/services/service-glow.png';

const ServiceItem: FC<IProps> = ({ path, icon, tags, title, number }) => {
  return (
    <Link to={path}>
      <Container>
        <TitleWrap>
          <Number>{number}</Number>
          <Title>{title}</Title>
        </TitleWrap>
        <DetailsWrap>
          <ServiceItemTagsList tags={tags} />
          <Image src={icon} />
        </DetailsWrap>
        <GlowImg src={serviceGlow} />
      </Container>
    </Link>
  );
};

export default ServiceItem;
