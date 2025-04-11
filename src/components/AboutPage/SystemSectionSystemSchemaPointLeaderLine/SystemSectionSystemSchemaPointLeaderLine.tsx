import { FC } from 'react';
import { IProps } from './SystemSectionSystemSchemaPointLeaderLine.types';
import {
  Container,
  LeaderLineImgDesk,
  LeaderLineImgMob,
} from './SystemSectionSystemSchemaPointLeaderLine.styled';

const SystemSectionSystemSchemaPointLeaderLine: FC<IProps> = ({
  heightDesk,
  imgDesk,
  leftDesk,
  topDesk,
  widthDesk,
  leftMob,
  topMob,
  bottomMob,
  rightMob,
  rightDesk,
  bottomDesk,
  imgMob,
  widthMob,
  heightMob,
}) => {
  return (
    <Container
      leftMob={leftMob}
      topMob={topMob}
      rightMob={rightMob}
      bottomMob={bottomMob}
      leftDesk={leftDesk}
      topDesk={topDesk}
      rightDesk={rightDesk}
      bottomDesk={bottomDesk}
    >
      <LeaderLineImgMob
        src={imgMob}
        alt=''
        width={widthMob}
        height={heightMob}
      />
      <LeaderLineImgDesk
        src={imgDesk}
        alt=''
        width={widthDesk}
        height={heightDesk}
      />
    </Container>
  );
};

export default SystemSectionSystemSchemaPointLeaderLine;
