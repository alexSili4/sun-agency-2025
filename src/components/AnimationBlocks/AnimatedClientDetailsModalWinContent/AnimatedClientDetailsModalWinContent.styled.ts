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
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};
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
`;

export const Content = styled.div`
  height: 100%;
  padding: ${({ theme: { spacing } }) =>
    `${spacing(19)} ${spacing(57)} ${spacing(14)} ${spacing(14)}`};
  overflow-y: auto;
`;
