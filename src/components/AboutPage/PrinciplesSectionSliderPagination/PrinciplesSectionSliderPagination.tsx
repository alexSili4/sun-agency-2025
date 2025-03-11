import { FC } from 'react';
import { IProps } from './PrinciplesSectionSliderPagination.types';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import {
  List,
  Button,
  ListItem,
  Container,
  Progress,
} from './PrinciplesSectionSliderPagination.styled';
import { useSwiper } from 'swiper/react';

const PrinciplesSectionSliderPagination: FC<IProps> = ({
  principles,
  activeIndex,
  progress,
}) => {
  const swiper = useSwiper();

  return (
    <Container>
      <List>
        {principles.map((_, index) => {
          const isActiveBtn = activeIndex === index;

          const onPaginationBtnClick = (e: BtnClickEvent) => {
            makeBlur(e.currentTarget);

            swiper.slideTo(index);
          };

          return (
            <ListItem key={index} isActiveBtn={isActiveBtn}>
              <Button type='button' onClick={onPaginationBtnClick}>
                {isActiveBtn && <Progress progress={progress}></Progress>}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default PrinciplesSectionSliderPagination;
