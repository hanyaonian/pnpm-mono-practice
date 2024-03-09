import path from "path";
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig([
  {
    input: path.resolve("./index.ts"),
    output: [
      {
        file: "dist/index.mjs",
        name: "DemoConfig",
        format: "esm",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: path.resolve("./index.ts"),
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
    ],
    plugins: [typescript()],
  },
]);
