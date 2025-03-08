import { FC } from 'react';
import { IProps } from './HeroSectionBusinessMetrics.types';
import {
  Container,
  List,
  ListItem,
  ListWrap,
} from './HeroSectionBusinessMetrics.styled';
import { getIsFirstItem } from '@/utils';
import HeroSectionBusinessMetricDetails from '@AboutPageComponents/HeroSectionBusinessMetricDetails';

const HeroSectionBusinessMetrics: FC<IProps> = ({ metrics }) => {
  const metricsLength = metrics.length;

  return (
    <Container>
      <ListWrap>
        <List>
          {metrics.map(({ name, number }, index) => {
            const isFirstItem = getIsFirstItem(index);
            const shouldShowDelimiter = !isFirstItem;
            const shouldShowPadding = isFirstItem;

            return (
              <ListItem key={index} metrics={metricsLength}>
                <HeroSectionBusinessMetricDetails
                  name={name}
                  number={number}
                  shouldShowDelimiter={shouldShowDelimiter}
                  shouldShowPadding={shouldShowPadding}
                />
              </ListItem>
            );
          })}
        </List>
      </ListWrap>
    </Container>
  );
};

export default HeroSectionBusinessMetrics;
