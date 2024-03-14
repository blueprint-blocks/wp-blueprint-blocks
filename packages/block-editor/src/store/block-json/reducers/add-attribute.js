import { getUniqueClientId } from "../../../functions";
import { getUniqueAttributeName } from "../selectors";

const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const addAttribute = (state, action) => {
	let { name = "", type = "string", defaultValue = null } = action.payload;

	if (name === "") {
		name = getUniqueAttributeName(state, "attribute");
	}

	const attributes = [...state.attributes];

	attributes.push({
		name,
		type: (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string",
		default: defaultValue || null,
		clientId: getUniqueClientId(),
	});

	state.attributes = attributes;
};

export default addAttribute;
