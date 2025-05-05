import styled from '@emotion/styled';

export const Container = styled.label`
  display: block;
  cursor: pointer;
`;

export const TitleWrap = styled.span`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white50};
  font-family: Involve;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:hover, :focus, :checked)) & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
