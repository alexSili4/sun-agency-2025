import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import { IProps } from './AnimatedServicesList.types';
import ServiceItem from '@MainPageComponents/ServiceItem';
import { List, ListItem } from './AnimatedServicesList.styled';
import { framerMotionVariants } from '@/constants';

const AnimatedServicesList: FC<IProps> = ({ services, nextSectionInView }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: nextSectionInView ? '-100px' : '-300px',
  });
  const animate = inView ? 'visible' : 'hidden';

  return (
    <List
      variants={framerMotionVariants.slowAnimationContainerVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {services.map(({ icon, path, tags, title }, index) => {
        const position = index + 1;
        const positionString = String(position);
        const formattedNumber = positionString.padStart(2, '0');

        return (
          <ListItem
            variants={framerMotionVariants.smallMovementAnimationVariants}
            key={index}
          >
            <ServiceItem
              icon={icon}
              path={path}
              tags={tags}
              title={title}
              number={formattedNumber}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default AnimatedServicesList;
