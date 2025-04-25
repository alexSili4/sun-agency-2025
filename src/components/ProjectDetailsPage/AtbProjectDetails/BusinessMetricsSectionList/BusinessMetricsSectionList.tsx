import { FC } from 'react';
import { IProps } from './BusinessMetricsSectionList.types';
import { List, ListItem } from './BusinessMetricsSectionList.styled';
// ----- components
import BusinessMetricsSectionBusinessMetricDetails from '@AtbProjectDetailsComponents/BusinessMetricsSectionBusinessMetricDetails';

const BusinessMetricsSectionList: FC<IProps> = ({ businessMetrics }) => {
  const businessMetricsLength = businessMetrics.length;

  return (
    <List>
      {businessMetrics.map(({ title, number }, index) => (
        <ListItem key={index} businessMetrics={businessMetricsLength}>
          <BusinessMetricsSectionBusinessMetricDetails
            number={number}
            title={title}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BusinessMetricsSectionList;
