import { FC } from 'react';
import {
  Container,
  Content,
  Delimiter,
  Text,
  Title,
} from './HeroSectionBusinessMetricDetails.styled';
import { IProps } from './HeroSectionBusinessMetricDetails.types';

const HeroSectionBusinessMetricDetails: FC<IProps> = ({
  name,
  number,
  shouldShowDelimiter,
  shouldShowPadding,
}) => {
  return (
    <Container shouldShowPadding={shouldShowPadding}>
      {shouldShowDelimiter && <Delimiter></Delimiter>}
      <Content>
        <Title>{name}</Title>
        <Text>{number}</Text>
      </Content>
    </Container>
  );
};

export default HeroSectionBusinessMetricDetails;
