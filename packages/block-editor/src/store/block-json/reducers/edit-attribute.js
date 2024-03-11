const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const editAttribute = (state, action) => {
	const { name = "", type = "string", defaultValue = null } = action.payload;

	console.log(name, type, defaultValue);

	state.attributes = {
		...state.attributes,
		[name]: {
			type: (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string",
			default: defaultValue || null,
		},
	};
};

export default editAttribute;
