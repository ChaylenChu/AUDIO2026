import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👈 必须改成你的仓库名，前后都要有斜杠
  base: '/AUDIO2026/', 
})