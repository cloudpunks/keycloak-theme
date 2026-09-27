import path from "node:path";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import { keycloakify } from "keycloakify/vite-plugin";
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    keycloakify({
      themeName: "cloudpunks",
      accountThemeImplementation: "Multi-Page",
      environmentVariables: [
        {
          name: "SHADCN_THEME_LOGO_WHITE_URL",
          default: "",
        },
        {
          name: "SHADCN_THEME_LOGO_DARK_URL",
          default: "",
        },
        { name: "SHADCN_THEME_APP_NAME", default: "cloudpunks GmbH" },
        { name: "SHADCN_THEME_LAYOUT", default: "centered-card" },
        { name: "SHADCN_THEME_SIDE_IMAGE_URL", default: "" },
        { name: "SHADCN_THEME_PRESET", default: "neutral" },
        { name: "SHADCN_THEME_BASE", default: "neutral" },
        { name: "SHADCN_THEME_RADIUS", default: "default" },
        { name: "SHADCN_THEME_FONT", default: "geist" },
        { name: "SHADCN_THEME_PLACEHOLDER", default: "true" },
      ],
      keycloakVersionTargets: {
        "21-and-below": false,
        "23": false,
        "24": false,
        "25": false,
        "26.0-to-26.1": false,
        "26.2-and-above": true,
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src")
    }
  }
});
