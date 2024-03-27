import { getAttributeIndex } from "../selectors";

const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const editAttribute = (state, action) => {
	const { name = "", ...attribute } = action.payload;
	const index = getAttributeIndex(state, name);

	if (index === null) {
		return;
	}

	const attributes = [...state.attributes];

	attributes[index] = {
		...attributes[index],
		...attribute,
		name,
	};

	state.attributes = attributes;
};

export default editAttribute;
