import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCase', // Позволяет использовать camelCase для классов
			scopeBehaviour: 'local', // Все файлы будут обрабатываться как CSS Modules
			generateScopedName: '[name]__[local]___[hash:base64:5]', // Формат имен классов
		},
	},
});
