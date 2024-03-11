import { getUniqueAttributeName } from "../selectors";

const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const addAttribute = (state, action) => {
	let { name = "", type = "string", defaultValue = null } = action.payload;

	if (name === "") {
		name = getUniqueAttributeName("attribute", state);
	}

	const attributes = [...state.attributes];

	attributes.push({
		name,
		type: (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string",
		default: defaultValue || null,
	});

	state.attributes = attributes;
};

export default addAttribute;
