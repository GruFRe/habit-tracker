import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Comment for changing something
// https://vite.dev/config/
export default defineConfig({
	base: "/CI/",
	plugins: [react(), tailwindcss()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/vitest.setup.ts"],
		coverage: {
			provider: "istanbul", // Istanbul JS is a test coverage tool
			reporter: ["text", "json", "html"],
			thresholds: {
				branches: 0,
				functions: 0,
				statements: 0,
			},
		},
	},
});
