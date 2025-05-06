import { theme } from '@/constants';
import { getFlexItemWidth } from '@/utils';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const listGapMob = 0;
const listGapDesk = theme.spacing(4);
const listLengthMob = 2;
const listLengthDesk = 4;

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${listGapDesk}px;
`;

export const ListItem = styled(motion.li)`
  width: calc(
    ${getFlexItemWidth({ listGap: listGapMob, listLength: listLengthMob })}
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: calc(
      ${getFlexItemWidth({ listGap: listGapDesk, listLength: listLengthDesk })}
    );
  }
`;
