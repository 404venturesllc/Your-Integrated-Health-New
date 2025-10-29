
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import viteCompression from 'vite-plugin-compression';

  export default defineConfig({
    plugins: [
      react(),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240, // Only compress files bigger than 10KB
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/faa3fcfb30b722e5b096c3067900c2fd8881acbf.png': path.resolve(__dirname, './src/assets/faa3fcfb30b722e5b096c3067900c2fd8881acbf.png'),
        'figma:asset/f1631469ffda4633ffd9113cc29858db7de01fda.png': path.resolve(__dirname, './src/assets/f1631469ffda4633ffd9113cc29858db7de01fda.png'),
        'figma:asset/bad57ee87977a7c766923f8e7a3adcd6ddc08e09.png': path.resolve(__dirname, './src/assets/bad57ee87977a7c766923f8e7a3adcd6ddc08e09.png'),
        'figma:asset/ba13d4883035a4786187879b02156d64fb30faf2.png': path.resolve(__dirname, './src/assets/ba13d4883035a4786187879b02156d64fb30faf2.webp'),
        'figma:asset/b5f3ab831f3e2a78b8073d78ff761c491f57dd78.png': path.resolve(__dirname, './src/assets/b5f3ab831f3e2a78b8073d78ff761c491f57dd78.png'),
        'figma:asset/ac04ba94d9c0c06a642e143dbd178834d292e80d.png': path.resolve(__dirname, './src/assets/ac04ba94d9c0c06a642e143dbd178834d292e80d.png'),
        'figma:asset/91204406f01523c66794714f7b4dc1dabb04d514.png': path.resolve(__dirname, './src/assets/91204406f01523c66794714f7b4dc1dabb04d514.webp'),
        'figma:asset/8bf80033e33324855df5bc6382f04929e0d3fd7a.png': path.resolve(__dirname, './src/assets/8bf80033e33324855df5bc6382f04929e0d3fd7a.png'),
        'figma:asset/885d39ce26a80b9d46612018586366740639636e.png': path.resolve(__dirname, './src/assets/885d39ce26a80b9d46612018586366740639636e.webp'),
        'figma:asset/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.png': path.resolve(__dirname, './src/assets/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.webp'),
        'figma:asset/75fe3c992e0fec8c9556b536b9dd6e9fa5507b9e.png': path.resolve(__dirname, './src/assets/75fe3c992e0fec8c9556b536b9dd6e9fa5507b9e.png'),
        'figma:asset/65108e3b02768bd9c043e51fdc417c70d895b02c.png': path.resolve(__dirname, './src/assets/65108e3b02768bd9c043e51fdc417c70d895b02c.png'),
        'figma:asset/5060ad295a0cb34ac35f67fb2d0cdd46ecc2e165.png': path.resolve(__dirname, './src/assets/5060ad295a0cb34ac35f67fb2d0cdd46ecc2e165.png'),
        'figma:asset/48e69dbd44c881ef26889bac0c30d7dadc6b9965.png': path.resolve(__dirname, './src/assets/48e69dbd44c881ef26889bac0c30d7dadc6b9965.webp'),
        'figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png': path.resolve(__dirname, './src/assets/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png'),
        'figma:asset/24b4141345e6be30ab7a3e5a1b4e537aaca3e236.png': path.resolve(__dirname, './src/assets/24b4141345e6be30ab7a3e5a1b4e537aaca3e236.png'),
        'figma:asset/14cb7f2d11ca7d2ada14dbcc4f177b7aea981cb8.png': path.resolve(__dirname, './src/assets/14cb7f2d11ca7d2ada14dbcc4f177b7aea981cb8.png'),
        'figma:asset/0a190a2b9d3e402ba32a1e4c075239fb1a49c61e.png': path.resolve(__dirname, './src/assets/0a190a2b9d3e402ba32a1e4c075239fb1a49c61e.webp'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      cssCodeSplit: true,
      sourcemap: false, // Disable sourcemaps for faster builds
      minify: 'terser', // Better minification than esbuild
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-helmet-async', 'react-router-dom'],
            'ui-vendor': ['lucide-react'],
            'radix-vendor': [
              '@radix-ui/react-dialog',
              '@radix-ui/react-accordion',
              '@radix-ui/react-select',
              '@radix-ui/react-tabs',
            ],
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      chunkSizeWarningLimit: 600,
    },
    server: {
      port: 3000,
      open: true,
    },
  });