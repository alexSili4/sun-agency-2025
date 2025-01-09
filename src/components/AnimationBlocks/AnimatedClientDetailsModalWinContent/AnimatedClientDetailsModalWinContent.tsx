import { FC } from 'react';
import { motion } from 'framer-motion';
import { IProps } from './AnimatedClientDetailsModalWinContent.types';
import {
  Backdrop,
  BackdropWrap,
  Container,
  Content,
} from './AnimatedClientDetailsModalWinContent.styled';
import GlowingCloseClientDetailsModalWinBtn from '@MainPageComponents/GlowingCloseClientDetailsModalWinBtn';

const AnimatedClientDetailsModalWinContent: FC<IProps> = ({
  children,
  setModalWinState,
  hideModalWin,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <BackdropWrap>
        <Backdrop onClick={hideModalWin}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: 200, transition: { duration: 0.3 } }}
          >
            <Container>
              <GlowingCloseClientDetailsModalWinBtn
                onClick={setModalWinState}
              />
              <Content>{children}</Content>
            </Container>
          </motion.div>
        </Backdrop>
      </BackdropWrap>
    </motion.div>
  );
};

export default AnimatedClientDetailsModalWinContent;
