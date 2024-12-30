import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(13)};
  padding: ${({ theme: { spacing } }) => `${spacing(2)} ${spacing(5)}`};
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => theme.colors};
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: transparent;
  }
`;

export const LinkTitle = styled.span`
  position: relative;
  width: 156px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;

export const LinkIconContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LinkDecorativeImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 23px;
  transform: translateX(calc(-50% - 18px)) translateY(-50%);

  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc},
    transform ${({ theme }) => theme.transitionDurationAndFunc};

  a:is(:hover, :focus) > span > & {
    opacity: 0;
    transform: translateX(calc(-50%)) translateY(-50%);
  }
`;

export const LinkIconWrap = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background-color: #101010;

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  right: 0;
  top: 50%;
  width: calc(100% - 34px) !important;
  height: auto !important;
  transform: translateY(-50%);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  a:not(:is(:hover, :focus)) > & {
    opacity: 0;
  }
`;

export const ShadowImg = styled.img`
  position: absolute;
  top: -416px;
  left: -335px;
  width: 617px;
  max-width: 617px;
  height: 662px;
  outline: 2px solid red;
`;
