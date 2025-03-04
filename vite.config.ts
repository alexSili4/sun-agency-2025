import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   svgo: {
    //     plugins: [
    //       { name: 'removeViewBox', active: false },
    //       { name: 'removeEmptyAttrs', active: true },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@AnimationBlocks': '/src/components/AnimationBlocks',
      '@GeneralComponents': '/src/components/General',
      '@ErrorPageComponents': '/src/components/ErrorPage',
      '@MainPageComponents': '/src/components/MainPage',
      '@AboutPageComponents': '/src/components/AboutPage',
      '@ProjectDetailsPageComponents': '/src/components/ProjectDetailsPage',
      '@AtbProjectDetailsComponents':
        '/src/components/ProjectDetailsPage/AtbProjectDetails',
    },
  },
});
