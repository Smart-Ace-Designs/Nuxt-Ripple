import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: [],
  sortTailwindcss: {
    stylesheet: "./app/assets/css/main.css",
    functions: ["clsx", "cn"],
  },
});
