/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testNamePattern: /\.spec\.(ts|js)$/g
  },
})
