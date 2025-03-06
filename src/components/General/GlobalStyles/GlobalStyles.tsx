import 'modern-normalize';
import 'swiper/css';
import 'swiper/css/navigation';
import { FC } from 'react';
import { Global, css } from '@emotion/react';
import { theme } from '@/constants';
import {
  interRegular,
  involveRegular,
  involveSemiBold,
  involveMedium,
  pliskaRegular,
} from '@/fonts';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @property --backdrop-rotate {
        syntax: '<angle>';
        initial-value: 132deg;
        inherits: false;
      }

      @font-face {
        font-family: ${theme.fontFamily.inter};
        src: local(${theme.fontFamily.inter}),
          url(${interRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${theme.fontFamily.involve};
        src: local(${theme.fontFamily.involve}),
          url(${involveRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${theme.fontFamily.involve};
        src: local(${theme.fontFamily.involve}),
          url(${involveMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: ${theme.fontFamily.involve};
        src: local(${theme.fontFamily.involve}),
          url(${involveSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: ${theme.fontFamily.pliska};
        src: local(${theme.fontFamily.pliska}),
          url(${pliskaRegular}) format('truetype');
        font-weight: 400;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: auto;
        overflow-x: hidden;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
