import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib',
    platform: 'browser',
    ignores: ['src/**/demo/**', 'src/**/*.md'],
  },
  esm: {
    output: 'es',
    ignores: ['src/**/demo/**', 'src/**/*.md'],
  },
  extraBabelPlugins: ['add-module-exports'],
});
