import { FC } from 'react';
import { IProps } from './AtbBusinessMetricsList.types';
import AtbBusinessMetrics from '@ProjectDetailsPageComponents/AtbBusinessMetrics';
import { List, ListItem } from './AtbBusinessMetricsList.styled';

const AtbBusinessMetricsList: FC<IProps> = ({ businessMetrics }) => {
  const businessMetricsLength = businessMetrics.length;

  return (
    <List>
      {businessMetrics.map(({ img, title }, index) => (
        <ListItem key={index} businessMetrics={businessMetricsLength}>
          <AtbBusinessMetrics img={img} title={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbBusinessMetricsList;
