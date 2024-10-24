import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // เปลี่ยนพอร์ตให้ตรงกับพอร์ตของ backend (Express)
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // ลบ '/api' ก่อนส่งไปยัง backend
            },
        },
    },
    
});
