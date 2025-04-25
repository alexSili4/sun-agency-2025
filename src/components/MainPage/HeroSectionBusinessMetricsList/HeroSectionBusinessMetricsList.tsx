import { FC } from 'react';
import {
  Text,
  List,
  ListItem,
  StatisticsItem,
  TextPart,
  Number,
} from './HeroSectionBusinessMetricsList.styled';
import { statistics, Symbols } from '@/constants';
import { IProps } from './HeroSectionBusinessMetricsList.types';

const HeroSectionBusinessMetricsList: FC<IProps> = ({
  firstOpacity,
  secondOpacity,
  thirdOpacity,
}) => {
  return (
    <List>
      {statistics.map(({ title, number, isBaseItem }, index) => {
        const isThirdItem = index === 2;
        const isSecondItem = index === 1;

        const textParts = title.split(Symbols.textWrap);
        const targetOpacity = isSecondItem
          ? secondOpacity
          : isThirdItem
          ? thirdOpacity
          : firstOpacity;

        return (
          <ListItem key={index}>
            <StatisticsItem
              isBaseItem={isBaseItem}
              style={{ opacity: targetOpacity }}
            >
              <Number>{number}</Number>
              <Text>
                {textParts.map((word, index) => (
                  <TextPart key={index}>{word}</TextPart>
                ))}
              </Text>
            </StatisticsItem>
          </ListItem>
        );
      })}
    </List>
  );
};

export default HeroSectionBusinessMetricsList;
