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
      sourcemap: 'inline'
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: 'inline'
    },
  ],
  plugins: [
    tslint(),
    typescript(),
    terser()
  ]
};