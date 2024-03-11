import { getAttributeIndex } from "../selectors";

const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const editAttribute = (state, action) => {
	const { name = "", type = "string", defaultValue = null } = action.payload;
	const index = getAttributeIndex(state, name);

	if (index === null) {
		return;
	}

	const attributes = [...state.attributes];

	attributes[index] = {
		name,
		type: (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string",
		default: defaultValue || null,
	};

	state.attributes = attributes;
};

export default editAttribute;
