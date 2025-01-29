import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1px;
  border-radius: 20px;
  background-image: conic-gradient(
    from 80deg,
    #161616,
    #ffffff,
    #161616,
    #ffffff,
    #161616
  );
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing()}px;
  padding-top: ${({ theme }) => theme.spacing(9)}px;
  padding-bottom: ${({ theme }) => theme.spacing(9)}px;
  border-radius: inherit;
  background-color: #161616;
`;

export const Image = styled.img`
  height: 38px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.16;
  text-transform: lowercase;
`;
