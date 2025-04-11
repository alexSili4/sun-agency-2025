import { FC } from 'react';
import { Container, Point } from './SystemSectionSystemSchemaPoint.styled';
import { IProps } from './SystemSectionSystemSchemaPoint.types';
import SystemSectionSystemSchemaPointDetails from '@AboutPageComponents/SystemSectionSystemSchemaPointDetails';
import ActivePoint from '@/icons/about/system/active-point.svg?react';

const SystemSectionSystemSchemaPoint: FC<IProps> = ({
  pointLeftDesk,
  pointLeftMob,
  pointTopDesk,
  pointTopMob,
  descPaddingBottomDesk = 0,
  descPaddingBottomMob = 0,
  descPaddingLeftDesk = 0,
  descPaddingLeftMob = 0,
  descPaddingRightDesk = 0,
  descPaddingRightMob = 0,
  descPaddingTopDesk = 0,
  descPaddingTopMob = 0,
  text,
  descTopDesk,
  descLeftDesk,
  descBottomDesk,
  descRightDesk,
  descTopMob,
  descLeftMob,
  descBottomMob,
  descRightMob,
  leaderLineHeightDesk,
  leaderLineImgDesk,
  leaderLineLeftDesk,
  leaderLineWidthDesk,
  leaderLineTopDesk,
  leaderLineImgMob,
  leaderLineHeightMob,
  leaderLineBottomMob,
  leaderLineBottomDesk,
  leaderLineLeftMob,
  leaderLineRightDesk,
  leaderLineRightMob,
  leaderLineTopMob,
  leaderLineWidthMob,
}) => {
  return (
    <Container
      leftDesk={pointLeftDesk}
      leftMob={pointLeftMob}
      topDesk={pointTopDesk}
      topMob={pointTopMob}
    >
      <Point>
        <ActivePoint />
        <SystemSectionSystemSchemaPointDetails
          descPaddingBottomDesk={descPaddingBottomDesk}
          descPaddingBottomMob={descPaddingBottomMob}
          descPaddingLeftDesk={descPaddingLeftDesk}
          descPaddingLeftMob={descPaddingLeftMob}
          descPaddingRightDesk={descPaddingRightDesk}
          descPaddingRightMob={descPaddingRightMob}
          descPaddingTopDesk={descPaddingTopDesk}
          descPaddingTopMob={descPaddingTopMob}
          text={text}
          descBottomDesk={descBottomDesk}
          descLeftDesk={descLeftDesk}
          descRightDesk={descRightDesk}
          descTopDesk={descTopDesk}
          descBottomMob={descBottomMob}
          descLeftMob={descLeftMob}
          descRightMob={descRightMob}
          descTopMob={descTopMob}
          leaderLineHeightDesk={leaderLineHeightDesk}
          leaderLineImgDesk={leaderLineImgDesk}
          leaderLineLeftDesk={leaderLineLeftDesk}
          leaderLineTopDesk={leaderLineTopDesk}
          leaderLineWidthDesk={leaderLineWidthDesk}
          leaderLineBottomDesk={leaderLineBottomDesk}
          leaderLineBottomMob={leaderLineBottomMob}
          leaderLineHeightMob={leaderLineHeightMob}
          leaderLineImgMob={leaderLineImgMob}
          leaderLineLeftMob={leaderLineLeftMob}
          leaderLineRightDesk={leaderLineRightDesk}
          leaderLineRightMob={leaderLineRightMob}
          leaderLineTopMob={leaderLineTopMob}
          leaderLineWidthMob={leaderLineWidthMob}
        />
      </Point>
    </Container>
  );
};

export default SystemSectionSystemSchemaPoint;
