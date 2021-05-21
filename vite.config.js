import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        Vue(),
        Pages({
            extensions: ['jsx'],
            react: true,
            pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
        }),
    ],
});
