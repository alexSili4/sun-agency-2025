import { FC } from 'react';
import { IProps } from './AtbFeatureSectionMetricsList.types';
import { List, ListItem } from './AtbFeatureSectionMetricsList.styled';
import AtbFeatureSectionMetric from '@AtbProjectDetailsComponents/AtbFeatureSectionMetric';

const AtbFeatureSectionMetricsList: FC<IProps> = ({ metrics, maxWidth }) => {
  const metricsLength = metrics.length;

  return (
    <List>
      {metrics.map(({ img, title }, index) => (
        <ListItem key={index} metrics={metricsLength}>
          <AtbFeatureSectionMetric
            img={img}
            title={title}
            maxWidth={maxWidth}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AtbFeatureSectionMetricsList;
