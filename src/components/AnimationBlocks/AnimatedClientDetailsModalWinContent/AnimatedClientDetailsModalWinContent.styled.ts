import styled from '@emotion/styled';
import clientDetailsContainerBg from '@/images/clients/client-details-container-bg.png';

export const BackdropWrap = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.animatedModalWin};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  position: relative;
  width: 969px;
  height: 568px;
  background-image: url(${clientDetailsContainerBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-right: ${({ theme }) => theme.spacing(3)}px;
`;

export const Content = styled.div`
  height: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(19)}px ${spacing(54)}px ${spacing(14)}px ${spacing(14)}px`};
  overflow-y: auto;
  /* TODO fix */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    margin-top: ${({ theme }) => theme.spacing(38)}px;
    margin-bottom: ${({ theme }) => theme.spacing(8)}px;
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
`;
