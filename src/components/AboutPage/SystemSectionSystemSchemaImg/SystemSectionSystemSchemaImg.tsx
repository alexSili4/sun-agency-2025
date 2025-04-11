import { FC } from 'react';
import { IProps } from './SystemSectionSystemSchemaImg.types';
import { Coin, Container } from './SystemSectionSystemSchemaImg.styled';

const SystemSectionSystemSchemaImg: FC<IProps> = ({
  img,
  topMob,
  bottomMob,
  leftMob,
  rightMob,
  topDesk,
  bottomDesk,
  leftDesk,
  rightDesk,
  sizeMob,
  sizeDesk,
}) => {
  return (
    <Container
      topMob={topMob}
      bottomMob={bottomMob}
      leftMob={leftMob}
      rightMob={rightMob}
      topDesk={topDesk}
      bottomDesk={bottomDesk}
      leftDesk={leftDesk}
      rightDesk={rightDesk}
    >
      <Coin src={img} alt='' sizeMob={sizeMob} sizeDesk={sizeDesk} />
    </Container>
  );
};

export default SystemSectionSystemSchemaImg;
