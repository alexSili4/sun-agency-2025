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
  justify-content: space-between;
  align-items: center;
  border-radius: inherit;
  padding-left: ${({ theme }) => theme.spacing(15)};
  padding-right: ${({ theme }) => theme.spacing(15)};
  background-color: #161616;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
`;
