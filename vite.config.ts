import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Sito statico: la build produce solo file HTML/CSS/JS in build/.
			// 404.html viene servita dagli hosting statici per gli URL inesistenti.
			adapter: adapter({ fallback: '404.html' }),

			paths: {
				// Su GitHub Pages il sito vive in /nome-repository: il workflow imposta
				// BASE_PATH. In locale è vuota e il sito resta alla radice.
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`,
				relative: false
			}
		})
	]
});
