import { config } from "dotenv";
import { resolve } from "path";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import resolveCommonjs from "@rollup/plugin-commonjs";
import resolveNode from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import postcssAutoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import postcssVariables from "postcss-advanced-variables";
import serve from "rollup-plugin-serve";
import svgr from "@svgr/rollup";

const env = config({
	path: resolve("../../.env"),
});

export default {
	input: "src/main.jsx",
	output: {
		file: "./public/assets/block-editor.js",
		sourcemap: "inline",
		format: "iife",
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
				"env.DEBUG_CLIENT_ID": env.parsed.DEBUG_CLIENT_ID,
				"env.DEBUG_CONNECTIONS": env.parsed.DEBUG_CONNECTIONS,
				"env.DEBUG_RECT": env.parsed.DEBUG_RECT,
				"env.DEBUG_RENDER_COUNT": env.parsed.DEBUG_RENDER_COUNT,
			},
		}),
		json(),
		svgr(),
		postcss({
			extract: "block-editor.css",
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
		serve({
			open: true,
			verbose: true,
			contentBase: ["", "public"],
			host: "localhost",
			port: 3000,
		}),
		livereload({ watch: "public" }),
	],
};
