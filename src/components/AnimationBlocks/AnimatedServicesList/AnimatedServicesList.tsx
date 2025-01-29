import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import { IProps } from './AnimatedServicesList.types';
import { List, ListItem } from './AnimatedServicesList.styled';
// ----- components
import ServiceItem from '@MainPageComponents/ServiceItem';

const AnimatedServicesList: FC<IProps> = ({ services, nextSectionInView }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, {
    margin: nextSectionInView ? '-100px' : '-300px',
  });
  const animate = inView ? 'visible' : 'hidden';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <List
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {services.map(({ icon, path, tags, title }, index) => {
        const position = index + 1;
        const positionString = String(position);
        const formattedNumber = positionString.padStart(2, '0');

        return (
          <ListItem variants={elementVariants} key={index}>
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
