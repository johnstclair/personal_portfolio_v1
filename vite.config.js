import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

const projects = () => {
  return {
    name: 'projects',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/projects') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  appType: 'mpa', // disable history fallback
  plugins: [
    react(),
    rewriteSlashToIndexHtml(),
    projects()
  ],
})

