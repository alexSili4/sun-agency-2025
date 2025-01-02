import { FC } from 'react';
import {
  Text,
  List,
  ListItem,
  StatisticsItem,
  Image,
  TextPart,
} from './DonationSectionStatistics.styled';
import { statistics, Symbols } from '@/constants';
import { IProps } from './DonationSectionStatistics.types';

const DonationSectionStatistics: FC<IProps> = ({
  firstOpacity,
  secondOpacity,
  thirdOpacity,
}) => {
  return (
    <List>
      {statistics.map(
        ({ img, title, number, height, width, isBaseItem }, index) => {
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
                <Image src={img} alt={number} width={width} height={height} />
                <Text>
                  {textParts.map((word, index) => (
                    <TextPart key={index}>{word}</TextPart>
                  ))}
                </Text>
              </StatisticsItem>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default DonationSectionStatistics;
