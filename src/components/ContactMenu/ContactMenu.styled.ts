import styled from '@emotion/styled';

export const ContactBtn = styled.button`
  /* flex-shrink: 0; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 130px;
  height: 56px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background-image: radial-gradient(
    175% 286% at 50% -236%,
    rgba(0, 0, 0, 0) 42.549%,
    rgb(0, 0, 0) 100%
  );
`;

export const ContactBtnIcon = styled.span`
  width: 10px;
  aspect-ratio: 1 / 1;
  background-color: #ffcd33;
  border-radius: 50%;
`;

export const ContactBtnTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 18.67px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0%;
  text-align: left;
`;
