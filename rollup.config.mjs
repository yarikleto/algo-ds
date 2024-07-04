import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import fs from "fs";
import pkg from "./package.json" assert { type: 'json' };

export default {
  input: "src/algo-ds.ts",
  output: [
    {
      file: pkg.browser,
      name: pkg.browser,
      format: "umd",
      sourcemap: "inline",
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: "inline",
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: "inline",
    },
  ],
  plugins: [
    nodeResolve(),
    commonJs(),
    typescript(),
  ],
};
