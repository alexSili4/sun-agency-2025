import styled from '@emotion/styled';

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  filter: grayscale(100%);
  opacity: 0.2;
  transform: translateY(50%);
  pointer-events: none;
  transition: filter ${({ theme }) => theme.transitionDurationAndFunc.all},
    opacity ${({ theme }) => theme.transitionDurationAndFunc.all};

  div:has(a:is(:hover, :focus)) > & {
    filter: grayscale(0%);
    opacity: 1;
  }

  div > ul:has(a:is(:hover, :focus)) a:is(:hover, :focus) > & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;
