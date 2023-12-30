import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';


//(['./resources/css/app.css', './resources/js/app.js'])
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            build: {
                cssCodeSplit: true,
              },
        }),
    ],
    css: {
        // Example path, adjust it based on your project structure
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./path/to/your/styles";`,
          },
        },
      },
});



