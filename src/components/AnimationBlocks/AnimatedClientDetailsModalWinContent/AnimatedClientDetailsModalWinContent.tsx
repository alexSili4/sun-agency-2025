import { FC } from 'react';
import { motion } from 'framer-motion';
import { IProps } from './AnimatedClientDetailsModalWinContent.types';
import {
  Backdrop,
  BackdropWrap,
  Container,
  Content,
} from './AnimatedClientDetailsModalWinContent.styled';
import { IoMdClose } from 'react-icons/io';
import { theme } from '@/constants';
import glowingRoundBtn from '@/lottiefiles/glow/glowing-round-btn.json';
// ----- components
import GlowingButton from '@GeneralComponents/GlowingButton';

const AnimatedClientDetailsModalWinContent: FC<IProps> = ({
  children,
  setModalWinState,
  hideModalWin,
}) => {
  const transition = { duration: 0.3 };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition }}
      exit={{ opacity: 0, transition }}
    >
      <BackdropWrap>
        <Backdrop onClick={hideModalWin}>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0, transition }}
            exit={{ opacity: 0, y: 200, transition }}
          >
            <Container>
              <GlowingButton
                onClick={setModalWinState}
                animationData={glowingRoundBtn}
                glowHeight={70}
                glowWidth={70}
                width={54}
              >
                <IoMdClose size={theme.iconSizes.closeClientDetailsBtn} />
              </GlowingButton>

              <Content>{children}</Content>
            </Container>
          </motion.div>
        </Backdrop>
      </BackdropWrap>
    </motion.div>
  );
};

export default AnimatedClientDetailsModalWinContent;
