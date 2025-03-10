import styled from '@emotion/styled';
import clientDetailsContainerBgMob from '@/images/main/clients/client-details-container-bg-mob.png';
import clientDetailsContainerBgDesk from '@/images/main/clients/client-details-container-bg-desk.png';

export const BackdropWrap = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedModalWin};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(5)}px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  position: relative;
  aspect-ratio: 335 / 586;
  background-image: url(${clientDetailsContainerBgMob});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 4vh;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    width: 335px;
    height: 586px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    width: 968.59px;
    height: 567.57px;
    aspect-ratio: 968.59 / 567.57;
    padding-top: 5vh;
    background-image: url(${clientDetailsContainerBgDesk});
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(18)}px ${spacing(4)}px ${spacing(10)}px`};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(10)}px;
    margin-bottom: ${({ theme }) => theme.spacing(7)}px;
    background-color: rgba(255, 255, 255, 0.19);
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid rgba(255, 245, 211, 0.7);
    box-shadow: 0px 0px 4px 0px #ffc888;
    border-radius: 10px;
    filter: blur(1px);
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: ${({ theme: { spacing } }) =>
      `${spacing(19)}px ${spacing()}px ${spacing(14)}px ${spacing(14)}px`};
  }
`;
