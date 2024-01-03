import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/main.ts'],
    format: ['esm', 'cjs'],
    // target: ["es2015"],
    dts: true,
    sourcemap: true,
    clean: true,
})