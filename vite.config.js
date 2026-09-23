import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Actions supplies the Pages path; local development stays at /.
  base: process.env.VITE_BASE_PATH || '/',
});
