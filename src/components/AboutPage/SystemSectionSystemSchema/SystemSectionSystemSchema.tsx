import { FC } from 'react';
import { IProps } from './SystemSectionSystemSchema.types';
import SystemSectionSystemSchemaPoint from '@AboutPageComponents/SystemSectionSystemSchemaPoint';
import { Container, List, ListItem } from './SystemSectionSystemSchema.styled';
import SystemSectionSystemSchemaImg from '@AboutPageComponents/SystemSectionSystemSchemaImg';

const SystemSectionSystemSchema: FC<IProps> = ({ system }) => {
  return (
    <Container>
      <List>
        {system.map(
          (
            {
              point: {
                leftDesk: pointLeftDesk,
                leftMob: pointLeftMob,
                topDesk: pointTopDesk,
                topMob: pointTopMob,
                desc: {
                  paddingBottomDesk: descPaddingBottomDesk,
                  paddingBottomMob: descPaddingBottomMob,
                  paddingLeftDesk: descPaddingLeftDesk,
                  paddingLeftMob: descPaddingLeftMob,
                  paddingTopMob: descPaddingTopMob,
                  paddingTopDesk: descPaddingTopDesk,
                  paddingRightMob: descPaddingRightMob,
                  paddingRightDesk: descPaddingRightDesk,
                  text,
                  bottomMob: descBottomMob,
                  leftMob: descLeftMob,
                  rightMob: descRightMob,
                  topMob: descTopMob,
                  bottomDesk: descBottomDesk,
                  leftDesk: descLeftDesk,
                  rightDesk: descRightDesk,
                  topDesk: descTopDesk,
                  leaderLine: {
                    widthDesk: leaderLineWidthDesk,
                    widthMob: leaderLineWidthMob,
                    topDesk: leaderLineTopDesk,
                    leftDesk: leaderLineLeftDesk,
                    imgDesk: leaderLineImgDesk,
                    imgMob: leaderLineImgMob,
                    heightDesk: leaderLineHeightDesk,
                    heightMob: leaderLineHeightMob,
                    topMob: leaderLineTopMob,
                    rightMob: leaderLineRightMob,
                    rightDesk: leaderLineRightDesk,
                    leftMob: leaderLineLeftMob,
                    bottomMob: leaderLineBottomMob,
                    bottomDesk: leaderLineBottomDesk,
                  },
                },
              },
              img,
            },
            index
          ) => (
            <ListItem key={index}>
              <SystemSectionSystemSchemaPoint
                pointLeftDesk={pointLeftDesk}
                pointLeftMob={pointLeftMob}
                pointTopDesk={pointTopDesk}
                pointTopMob={pointTopMob}
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
                leaderLineImgMob={leaderLineImgMob}
                leaderLineImgDesk={leaderLineImgDesk}
                leaderLineLeftDesk={leaderLineLeftDesk}
                leaderLineTopDesk={leaderLineTopDesk}
                leaderLineWidthDesk={leaderLineWidthDesk}
                leaderLineWidthMob={leaderLineWidthMob}
                leaderLineHeightMob={leaderLineHeightMob}
                leaderLineBottomDesk={leaderLineBottomDesk}
                leaderLineBottomMob={leaderLineBottomMob}
                leaderLineLeftMob={leaderLineLeftMob}
                leaderLineRightDesk={leaderLineRightDesk}
                leaderLineRightMob={leaderLineRightMob}
                leaderLineTopMob={leaderLineTopMob}
              />
              {img && (
                <SystemSectionSystemSchemaImg
                  bottomDesk={img.bottomDesk}
                  bottomMob={img.bottomMob}
                  img={img.img}
                  leftDesk={img.leftDesk}
                  leftMob={img.leftMob}
                  rightDesk={img.rightDesk}
                  rightMob={img.rightMob}
                  sizeDesk={img.sizeDesk}
                  sizeMob={img.sizeMob}
                  topDesk={img.topDesk}
                  topMob={img.topMob}
                />
              )}
            </ListItem>
          )
        )}
      </List>
    </Container>
  );
};

export default SystemSectionSystemSchema;
