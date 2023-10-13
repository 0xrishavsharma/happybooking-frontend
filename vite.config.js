import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export const domainName =
	process.env.NODE_ENV === "production"
		? "https://happybooking-backend.onrender.com"
		: "http://localhost:8000";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: domainName,
				changeOrigin: true,
			},
		},
	},
});
