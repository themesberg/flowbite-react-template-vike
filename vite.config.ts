import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [vike({}), react({}), tailwindcss(), flowbiteReact()],
  build: {
    target: "es2022",
  },
});
