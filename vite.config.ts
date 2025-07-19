
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    {
      name: 'singleHMR',
      handleHotUpdate({ modules, file }: { modules: any[], file: string }) {
        modules.map((m: any) => {
          m.importedModules = new Set();
          m.importers = new Set();
        });

        return modules;
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
