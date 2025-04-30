import styled from '@emotion/styled';
import { IStyledInputsWrapProps } from './HeroSectionContactsForm.types';

export const Form = styled.form``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    gap: ${({ theme }) => theme.spacing(12)}px;
  }
`;

export const InputsWrap = styled.div<IStyledInputsWrapProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: ${({ rowGapDesk }) => rowGapDesk}px;
  }
`;
