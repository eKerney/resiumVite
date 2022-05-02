// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import cesium from 'vite-plugin-cesium';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh(), cesium()]
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()]
})