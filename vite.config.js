import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  // 💡 重點！注意前後都要有斜線。例如你的專案叫 my-weather-dashboard，就寫 '/my-weather-dashboard/'
  base: '/my-first-react-app/', 
})