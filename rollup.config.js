import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import tslint from 'rollup-plugin-tslint';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    tslint(),
    typescript(),
    terser()
  ]
};