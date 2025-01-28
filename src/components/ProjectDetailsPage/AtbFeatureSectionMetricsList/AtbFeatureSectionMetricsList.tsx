import { FC } from 'react';
import { IProps } from './AtbFeatureSectionMetricsList.types';
import { List, ListItem } from './AtbFeatureSectionMetricsList.styled';
import AtbFeatureSectionMetric from '@ProjectDetailsPageComponents/AtbFeatureSectionMetric';

const AtbFeatureSectionMetricsList: FC<IProps> = ({ metrics }) => {
  const metricsLength = metrics.length;

  return (
    <List>
      {metrics.map(({ img, title }, index) => (
        <ListItem key={index} metrics={metricsLength}>
          <AtbFeatureSectionMetric img={img} title={title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbFeatureSectionMetricsList;
