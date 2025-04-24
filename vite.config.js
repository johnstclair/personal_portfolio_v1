import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: 'https://johnstclair.github.io/personal-portfolio_v1/',
  plugins: [react()],
})

