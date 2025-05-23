import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'; // ✅ Import Vite plugin

export default defineConfig({
  server :{
    proxy :{
      '/api' : {
        target : 'http://localhost:3000',
        secure : false
      }
    }
  },
  plugins: [react(), tailwindcss()], // ✅ Use Tailwind as a Vite plugin

});
