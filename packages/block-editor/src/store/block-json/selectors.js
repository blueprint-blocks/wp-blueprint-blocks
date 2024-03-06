import { delimiterize } from "../../functions";

const getBlockClassName = (state, context) => {
	const { name = "" } = state;
	return `wp-block-${delimiterize(name)}`;
};

const getBlockName = (state, context) => {
	const { name = "" } = state;
	return name.split("/")?.[1] || "";
};

const getBlockNamespace = (state, context) => {
	const { name = "" } = state;
	return name.split("/")?.[0] || "";
};

export { getBlockClassName, getBlockName, getBlockNamespace };
