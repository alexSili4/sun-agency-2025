import { FC, useRef } from 'react';
import { IProps } from './PrinciplesSectionSliderControls.types';
import {
  Container,
  Button,
  Image,
  List,
  ListItem,
  MarkerWrap,
  Marker,
} from './PrinciplesSectionSliderControls.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur, padStart } from '@/utils';
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
        {principles.map(
          (
            {
              img: { img, leftDesk: imgLeftDesk, topDesk: imgTopDesk },
              marker: { leftDesk: markerLeftDesk, topDesk: markerTopDesk },
              title,
            },
            index
          ) => {
            const isActiveBtn = activeIndex === index;
            const number = index + 1;
            const listItemRotate = rotate * index;

            const marker = padStart({
              value: number,
              maxLength: 2,
              addSymbol: '0',
            });

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
                leftDesk={imgLeftDesk}
                topDesk={imgTopDesk}
              >
                <Button type='button' onClick={onSliderBtnClick}>
                  <Image src={img} alt={title} isActiveBtn={isActiveBtn} />
                  <MarkerWrap
                    isActiveBtn={isActiveBtn}
                    topDesk={markerTopDesk}
                    leftDesk={markerLeftDesk}
                  >
                    <Marker isActiveBtn={isActiveBtn}>{marker}</Marker>
                  </MarkerWrap>
                </Button>
              </ListItem>
            );
          }
        )}
      </List>
    </Container>
  );
};

export default PrinciplesSectionSliderControls;
