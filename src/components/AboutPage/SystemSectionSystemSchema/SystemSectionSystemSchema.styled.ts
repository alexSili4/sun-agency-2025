import styled from '@emotion/styled';
import systemDesk from '@/images/about/system/system-desk.jpg';
import systemMob from '@/images/about/system/system-mob.jpg';

export const Container = styled.div`
  position: relative;
  left: 50%;
  width: 555px;
  height: 251px;
  background-image: url(${systemMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translateX(calc(-50% + 8px));

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 1531px;
    height: 693px;
    background-image: url(${systemDesk});
    transform: translateX(calc(-50% + 22.5px));
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;
