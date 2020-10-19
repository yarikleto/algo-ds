import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { eslint } from 'rollup-plugin-eslint';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.browser,
      name: pkg.browser,
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
    }
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts', '.json']
    }),
    commonJs({ extensions: ['.js', '.ts', '.json'] }),
    eslint(),
    typescript(),
    terser(),
  ]
};