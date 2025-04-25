import { FC } from 'react';
import { IProps } from './FeatureSectionMetricsList.types';
import { List, ListItem } from './FeatureSectionMetricsList.styled';
// ----- components
import FeatureSectionMetricsListMetricDetails from '@AtbProjectDetailsComponents/FeatureSectionMetricsListMetricDetails';

const FeatureSectionMetricsList: FC<IProps> = ({ metrics, maxWidth }) => {
  const metricsLength = metrics.length;

  return (
    <List>
      {metrics.map(({ number, title }, index) => (
        <ListItem key={index} metrics={metricsLength}>
          <FeatureSectionMetricsListMetricDetails
            number={number}
            title={title}
            maxWidth={maxWidth}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default FeatureSectionMetricsList;
