import { FC } from 'react';
import { Container } from './SystemSectionSystemSchemaPointDetails.styled';
import { IProps } from './SystemSectionSystemSchemaPointDetails.types';
import SystemSectionSystemSchemaPointDesc from '@AboutPageComponents/SystemSectionSystemSchemaPointDesc';
import SystemSectionSystemSchemaPointLeaderLine from '@AboutPageComponents/SystemSectionSystemSchemaPointLeaderLine';

const SystemSectionSystemSchemaPointDetails: FC<IProps> = ({
  descPaddingBottomDesk,
  descPaddingBottomMob,
  descPaddingLeftDesk,
  descPaddingLeftMob,
  descPaddingRightDesk,
  descPaddingRightMob,
  descPaddingTopDesk,
  descPaddingTopMob,
  text,
  descBottomDesk,
  descLeftDesk,
  descRightDesk,
  descTopDesk,
  descBottomMob,
  descLeftMob,
  descRightMob,
  descTopMob,
  leaderLineImgDesk,
  leaderLineTopDesk,
  leaderLineWidthDesk,
  leaderLineHeightDesk,
  leaderLineLeftDesk,
  leaderLineBottomDesk,
  leaderLineBottomMob,
  leaderLineHeightMob,
  leaderLineImgMob,
  leaderLineLeftMob,
  leaderLineRightDesk,
  leaderLineRightMob,
  leaderLineTopMob,
  leaderLineWidthMob,
}) => {
  return (
    <Container
      paddingBottomDesk={descPaddingBottomDesk}
      paddingBottomMob={descPaddingBottomMob}
      paddingLeftDesk={descPaddingLeftDesk}
      paddingLeftMob={descPaddingLeftMob}
      paddingRightDesk={descPaddingRightDesk}
      paddingRightMob={descPaddingRightMob}
      paddingTopDesk={descPaddingTopDesk}
      paddingTopMob={descPaddingTopMob}
      bottomDesk={descBottomDesk}
      leftDesk={descLeftDesk}
      rightDesk={descRightDesk}
      topDesk={descTopDesk}
      bottomMob={descBottomMob}
      leftMob={descLeftMob}
      rightMob={descRightMob}
      topMob={descTopMob}
    >
      <SystemSectionSystemSchemaPointDesc text={text} />
      <SystemSectionSystemSchemaPointLeaderLine
        imgDesk={leaderLineImgDesk}
        imgMob={leaderLineImgMob}
        topDesk={leaderLineTopDesk}
        leftDesk={leaderLineLeftDesk}
        bottomDesk={leaderLineBottomDesk}
        bottomMob={leaderLineBottomMob}
        leftMob={leaderLineLeftMob}
        rightDesk={leaderLineRightDesk}
        rightMob={leaderLineRightMob}
        topMob={leaderLineTopMob}
        widthMob={leaderLineWidthMob}
        heightMob={leaderLineHeightMob}
        widthDesk={leaderLineWidthDesk}
        heightDesk={leaderLineHeightDesk}
      />
    </Container>
  );
};

export default SystemSectionSystemSchemaPointDetails;
