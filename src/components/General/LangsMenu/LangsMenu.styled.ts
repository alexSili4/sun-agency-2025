import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const LangsRadioBtnWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  div:not(:has(input:is(:hover, :focus))) > & {
    transform: translateX(0px);
  }

  & > label:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
`;
