import { config } from 'dotenv'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import resolveCommonjs from '@rollup/plugin-commonjs'
import resolveNode from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import postcssAutoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssVariables from 'postcss-advanced-variables'

const env = config( {
	path: resolve( '../../.env' ),
} )

export default {
	external: [
		'@wordpress/api-fetch',
		'react',
		'react-dom',
	],
	input: 'src/main.js',
	output: {
		file: '../../dist/block-editor-pro.js',
		sourcemap: ( process.env.NODE_ENV === 'development' ) && 'inline' || false,
		format: 'iife',
		globals: {
			'@wordpress/api-fetch': 'wp.apiFetch',
			'react': 'React',
			'react-dom': 'ReactDOM',
		},
		inlineDynamicImports: true,
	},
	onwarn( warning, warn ) {
		if ( warning.code === 'THIS_IS_UNDEFINED' || warning.code === 'SOURCEMAP_ERROR' ) return
		warn( warning )
	},
	plugins: [
		babel( {
			babelHelpers: 'bundled',
		} ),
		resolveCommonjs(),
		resolveNode( {
			extensions: [
				'.js',
				'.jsx',
			],
		} ),
		json(),
		postcss( {
			extract: 'block-editor-pro.css',
			plugins: [
				postcssVariables( {
					disable: '@mixin, @include, @content',
					variables: {
						'assets': resolve( './assets' ),
						'env': process.env.NODE_ENV,
						'debug-rect': ( process.env.NODE_ENV === 'development' ) && env.DEBUG_RECT,
					},
					unresolved: 'ignore',
				} ),
				postcssNesting(),
				postcssAutoprefixer(),
			],
			minimize: ( process.env.NODE_ENV === 'development' ),
			sourceMap: ( process.env.NODE_ENV === 'development' ),
		} ),
	],
}