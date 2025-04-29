import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const PhoneWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Messengers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const IconWrap = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop - 1}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  & > svg {
    fill: #7a7a7a;
    transition: fill ${({ theme }) => theme.transitionDurationAndFunc.all};

    &:is(:hover, :focus) {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
