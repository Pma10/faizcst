import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/faizcst';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: basePath
		},
		prerender: {
			default: true
		}
	}
};

export default config;
