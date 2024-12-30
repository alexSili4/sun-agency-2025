import { theme } from '@/constants';
import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader: FC = () => (
  <ThreeDots
    height='80'
    width='80'
    radius='9'
    color='#808080'
    ariaLabel='three-dots-loading'
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: '1',
      backgroundColor: theme.colors.darkBg,
    }}
    visible
  />
);

export default Loader;
