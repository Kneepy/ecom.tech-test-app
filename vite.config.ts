import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

export default defineConfig({
    plugins: [react()],
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@features': path.resolve(__dirname, './src/features'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@store': path.resolve(__dirname, './src/store'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@api': path.resolve(__dirname, './src/api'),
            '@assets': path.resolve(__dirname, './src/assets'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@styles/variables" as *;`
            },
        },
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: undefined,
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            },
        }
    },
})