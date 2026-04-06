import type { OxfmtConfig } from "oxfmt";

const config: OxfmtConfig = {
  ignorePatterns: [],
  lineWidth: 100,
  sortTailwindcss: {
    stylesheet: "./app/assets/css/main.css",
    functions: ["clsx", "cn"],
  },
};

export default config;
