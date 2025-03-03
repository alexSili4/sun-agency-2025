import { FC } from 'react';
import { IProps } from './AtbFeatureSectionMetricsList.types';
import { List, ListItem } from './AtbFeatureSectionMetricsList.styled';
// ----- components
import AtbFeatureSectionMetric from '@AtbProjectDetailsComponents/AtbFeatureSectionMetric';

const AtbFeatureSectionMetricsList: FC<IProps> = ({ metrics, maxWidth }) => {
  const metricsLength = metrics.length;

  return (
    <List>
      {metrics.map(({ number, title }, index) => (
        <ListItem key={index} metrics={metricsLength}>
          <AtbFeatureSectionMetric
            number={number}
            title={title}
            maxWidth={maxWidth}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbFeatureSectionMetricsList;
