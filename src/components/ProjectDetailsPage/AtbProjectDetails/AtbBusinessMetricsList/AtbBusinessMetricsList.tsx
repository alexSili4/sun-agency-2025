import { FC } from 'react';
import { IProps } from './AtbBusinessMetricsList.types';
import { List, ListItem } from './AtbBusinessMetricsList.styled';
// ----- components
import AtbBusinessMetric from '@AtbProjectDetailsComponents/AtbBusinessMetric';

const AtbBusinessMetricsList: FC<IProps> = ({ businessMetrics }) => {
  const businessMetricsLength = businessMetrics.length;

  return (
    <List>
      {businessMetrics.map(({ title, number }, index) => (
        <ListItem key={index} businessMetrics={businessMetricsLength}>
          <AtbBusinessMetric number={number} title={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbBusinessMetricsList;
