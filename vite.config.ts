import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
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
