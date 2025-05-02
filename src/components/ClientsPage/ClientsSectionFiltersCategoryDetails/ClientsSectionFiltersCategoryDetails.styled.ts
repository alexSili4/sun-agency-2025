import styled from '@emotion/styled';

export const Container = styled.label`
  display: inline-block;
`;

export const TitleWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { spacing } }) => `${spacing(4)}px ${spacing(5)}px`};
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:checked, :hover, :focus)) > & {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white70};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc.all},
    text-shadow ${({ theme }) => theme.transitionDurationAndFunc.all};

  label:has(input:is(:checked)) & {
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.25);
  }
`;

export const Input = styled.input`
  position: absolute;
  transform: scale(0);
`;
