import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

export default {
	external: [
		'@wordpress/blocks',
	],
	input: 'src/main.js',
	output: {
		file: 'dist/main.js',
		sourcemap: ( process.env.NODE_ENV === 'development' ),
		format: 'iife',
		globals: {
			'@wordpress/blocks': 'wp.blocks',
		},
	},
	plugins: [
		resolve( {
			only: [ '@blueprint-blocks/components' ],
		} ),
		replace( {
			preventAssignment: true,
			values: {
				'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV ),
			},
		} ),
	],
}
