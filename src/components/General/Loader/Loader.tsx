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
      position: 'fixed',
      zIndex: String(theme.zIndex.loader),
      top: '50%',
      left: '50%',
      backgroundColor: theme.colors.darkBg,
      transform: 'translateX(-50%) translateY(-50%)',
    }}
    visible
  />
);

export default Loader;
