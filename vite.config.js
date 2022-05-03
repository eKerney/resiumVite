// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import cesium from 'vite-plugin-cesium';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/resiumVite/',
//   plugins: [reactRefresh(), cesium()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/resiumVite/',
  plugins: [react(), cesium()]
})