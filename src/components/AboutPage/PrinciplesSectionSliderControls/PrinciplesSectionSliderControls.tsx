import { FC, useRef } from 'react';
import { IProps } from './PrinciplesSectionSliderControls.types';
import {
  Container,
  Button,
  Image,
  List,
  ListItem,
} from './PrinciplesSectionSliderControls.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useSwiper } from 'swiper/react';

const PrinciplesSectionSliderControls: FC<IProps> = ({
  principles,
  activeIndex,
  size,
  rotate,
}) => {
  const swiper = useSwiper();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRotate = activeIndex * rotate;
  const radius = size ? size / 2 : 0;

  return (
    <Container ref={containerRef} size={size}>
      <List size={size} rotate={listRotate}>
        {principles.map(({ img: { img }, title }, index) => {
          const isActiveBtn = activeIndex === index;
          const number = index + 1;
          const listItemRotate = rotate * index;
          const scale = isActiveBtn ? 1.37 : 1;

          const onSliderBtnClick = (e: BtnClickEvent) => {
            makeBlur(e.currentTarget);

            swiper.slideTo(index);
          };

          return (
            <ListItem
              key={index}
              number={number}
              radius={radius}
              rotate={listItemRotate}
              scale={scale}
            >
              <Button type='button' onClick={onSliderBtnClick}>
                <Image src={img} alt={title} />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PrinciplesSectionSliderControls;
