import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    // กำหนดค่า build output
    build: {
        // กำหนดโฟลเดอร์ output เป็น 'dist'
        outDir: 'dist',
        // กำหนดให้ไม่สร้าง source map เพื่อให้ build ขนาดเล็กลง
        sourcemap: false,
        // กำหนด assets directory ให้ถูกเก็บใน 'dist/assets'
        assetsDir: 'assets',
        // ปิดการ minify เพื่อให้ดูโค้ดที่ build ง่ายขึ้น (ถ้าต้องการ minify ปล่อยส่วนนี้ไว้ได้)
        minify: 'esbuild',
        // ปรับให้ assets เช่น รูปภาพ, fonts ถูกเก็บใน assets directory
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash].[ext]',
                chunkFileNames: 'assets/[name].[hash].js',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
    },
});
