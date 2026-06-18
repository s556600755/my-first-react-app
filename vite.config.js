import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 💡 1. 引入新版外掛

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 💡 2. 把外掛放進陣列裡，它會全自動掃描你的 React 檔案！
  ],
})