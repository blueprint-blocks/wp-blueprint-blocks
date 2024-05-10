import { resolve } from "path";
import resolveCommonjs from "@rollup/plugin-commonjs";
import resolveNode from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import postcssAutoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import postcssVariables from "postcss-advanced-variables";

export default {
	input: "src/main.js",
	output: {
		file: "../../dist/main.js",
		sourcemap:
			(process.env.NODE_ENV === "development" && "inline") || false,
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
		resolveCommonjs(),
		resolveNode({
			extensions: [".js", ".jsx"],
		}),
		postcss({
			extract: "main.css",
			plugins: [
				postcssVariables({
					disable: "@mixin, @include, @content",
					variables: {
						assets: resolve("./assets"),
						env: process.env.NODE_ENV,
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
