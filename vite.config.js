import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { domainName } from "./config";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// proxy: {
		// 	"/api": {
		// 		target: domainName,
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, ""),
		// 	},
		// },
	},
});
