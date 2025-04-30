import styled from '@emotion/styled';

export const Container = styled.label`
  display: block;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  cursor: pointer;
`;

export const Title = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:checked)) > & {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
