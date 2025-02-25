import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			strict: true,
			paths: "/naturemap",
		})
	},

	extensions: ['.svelte', '.md'],

	// const mdsvexOptions = {
	// 	extensions: ['.md'],
	// 	highlight: {
	// 		highlighter: async (code, lang = 'text') => {
	// 			const highlighter = await createHighlighter({
	// 				themes: ['poimandres'],
	// 				langs: ['javascript', 'typescript']
	// 			})
	// 			await highlighter.loadLanguage('javascript', 'typescript')
	// 			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
	// 			return `{@html \`${html}\` }`
	// 		}
	// 	},
	// },

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['poimandres'],
						langs: ['javascript', 'css']
					})
					await highlighter.loadLanguage('javascript', 'typescript')
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
					return `{@html \`${html}\` }`
				}
			},

			layout: {
				blog: 'src/routes/blog/post.svelte'
			},
		})
	],

};

export default config;
