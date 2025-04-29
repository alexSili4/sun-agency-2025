import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const Title = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid;
  border-color: transparent;
  background: rgba(51, 51, 51, 0.2);
  padding: ${({ theme }) => theme.spacing(4)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc.all};

  &::placeholder {
    color: #444444;
  }

  &:is(:hover, :focus) {
    outline: none;
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  resize: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    height: 100px;
  }
`;
