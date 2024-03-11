import { delimiterize } from "../../../functions";

const getBlockClassName = (state, context) => {
	const { name = "" } = state;
	return `wp-block-${delimiterize(name)}`;
};

export default getBlockClassName;
