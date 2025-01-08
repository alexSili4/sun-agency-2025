import { useInView } from 'motion/react';
import { FC, useRef } from 'react';
import { IProps } from './AnimatedServicesList.types';
import ServiceItem from '@MainPageComponents/ServiceItem';
import { List, ListItem } from './AnimatedServicesList.styled';

const AnimatedServicesList: FC<IProps> = ({ services }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(listRef, {
    once: true,
    margin: '-300px',
  });
  const animate = isInView ? 'visible' : 'hidden';
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemsVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <List
      variants={listVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {services.map(({ icon, path, tags, title }, index) => {
        const position = index + 1;
        const positionString = String(position);
        const formattedNumber = positionString.padStart(2, '0');

        return (
          <ListItem variants={listItemsVariants} key={index}>
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
