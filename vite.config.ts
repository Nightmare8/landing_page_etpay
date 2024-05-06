import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@sections": "/src/sections",
			"@components": "/src/components",
			"@assets": "/src/assets",
			"@data": "/src/data",
		},
	},
});
