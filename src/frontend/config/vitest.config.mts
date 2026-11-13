import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['config/**/*.test.ts'],
    exclude: ['**/._*', '**/node_modules/**'],
  },
});
