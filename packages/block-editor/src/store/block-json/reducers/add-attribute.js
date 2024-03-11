const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const addAttribute = (state, action) => {
	let { name = "", type = "string", defaultValue = null } = action.payload;

	if (name === "") {
		name = getUniqueAttributeName(
			"attribute",
			Object.keys(state.attributes),
		);
	}

	state.attributes = {
		...state.attributes,
		[name]: {
			type: (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string",
			default: defaultValue || null,
		},
	};
};

export default addAttribute;
