# Instalar
npm install tailwindcss @tailwindcss/vite

# Configurar o plugin Vite
## vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

# Importar no arquivo CSS
@import "tailwindcss";

# Exemplo de uso do Tailwind
class="text-3xl font-bold underline"