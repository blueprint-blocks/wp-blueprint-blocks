import { config } from "dotenv";
import { resolve } from "path";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import resolveCommonjs from "@rollup/plugin-commonjs";
import resolveNode from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import postcssAutoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import postcssVariables from "postcss-advanced-variables";

const env = config({
	path: resolve("../../.env"),
});

export default {
	external: [
		"@wordpress/block-editor",
		"@wordpress/blocks",
		"react",
		"react-dom",
	],
	input: "src/main.jsx",
	output: {
		file: "../../dist/block-preview.js",
		sourcemap:
			(process.env.NODE_ENV === "development" && "inline") || false,
		format: "iife",
		globals: {
			"@wordpress/block-editor": "wp.blockEditor",
			"@wordpress/blocks": "wp.blocks",
			react: "React",
			"react-dom": "ReactDOM",
		},
		inlineDynamicImports: true,
	},
	onwarn(warning, warn) {
		if (
			warning.code === "THIS_IS_UNDEFINED" ||
			warning.code === "SOURCEMAP_ERROR"
		)
			return;
		warn(warning);
	},
	plugins: [
		babel({
			babelHelpers: "bundled",
		}),
		resolveCommonjs(),
		resolveNode({
			extensions: [".js", ".jsx"],
		}),
		replace({
			preventAssignment: true,
			values: {
				"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			},
		}),
		postcss({
			extract: "block-preview.css",
			plugins: [
				postcssVariables({
					disable: "@mixin, @include, @content",
					variables: {
						assets: resolve("./assets"),
						env: process.env.NODE_ENV,
						"debug-rect":
							process.env.NODE_ENV === "development" &&
							env.DEBUG_RECT,
					},
					unresolved: "ignore",
				}),
				postcssNesting(),
				postcssAutoprefixer(),
			],
			minimize: process.env.NODE_ENV === "development",
			sourceMap: process.env.NODE_ENV === "development",
		}),
	],
};
