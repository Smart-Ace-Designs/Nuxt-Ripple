import { defineConfig } from "oxfmt";

export default defineConfig({
  sortTailwindcss: {
    attributes: ["active-class", "inactive-class", "ui"],
    functions: ["clsx", "cn", "cva", "tv"],
    stylesheet: "./app/assets/css/main.css",
  },
});
