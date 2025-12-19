import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // Separar vendor chunks para melhor cache
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'vendor-react';
                        }
                        return 'vendor';
                    }
                },
            },
        },
        // Otimizar chunk size
        chunkSizeWarningLimit: 1000,
    },
    // Otimizações de performance
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
})
