import styled from '@emotion/styled';

export const Container = styled.address`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const AddressItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PhonesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PhonesListItem = styled.li``;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  font-style: normal;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  address:has(a:is(:hover, :focus)) > div:not(:has(a:is(:hover, :focus))) > & {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  font-style: normal;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  address:has(a:is(:hover, :focus)) &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;

export const AddressLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.involve};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  font-style: normal;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};

  address:has(a:is(:hover, :focus)) &:not(:is(:hover, :focus)) {
    color: ${({ theme }) => theme.colors.inactiveLink};
  }
`;