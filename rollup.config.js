import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { eslint } from "rollup-plugin-eslint";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import fs from "fs";
import pkg from "./package.json";

const plugins = [
  nodeResolve({
    extensions: [".js", ".ts", ".json"],
  }),
  commonJs({ extensions: [".js", ".ts", ".json"] }),
  eslint(),
  typescript(),
  terser(),
];

const includeTSfiles = (fileName) =>
  !fileName.endsWith(".test.ts") && fileName.endsWith(".ts");
const excludeFiles = (files) => (fileName) => !files.includes(fileName);
const createConfigForFile = (fileName) => ({
  input: `src/${fileName}`,
  output: {
    file: `dist/${fileName.replace('.ts', '.js')}`,
    format: "cjs",
    sourcemap: "inline",
    exports: "default",
  },
  plugins,
});

const mainConfig = {
  input: "src/index.ts",
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
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: "inline",
    },
  ],
  plugins,
};

const configs = fs
  .readdirSync("./src/")
  .filter(includeTSfiles)
  .filter(excludeFiles("index.ts"))
  .map(createConfigForFile);

export default [
  mainConfig,
  ...configs,
];
