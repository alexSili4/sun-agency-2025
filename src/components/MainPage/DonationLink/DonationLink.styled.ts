import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)``;

export const LinkTitle = styled.span``;

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
