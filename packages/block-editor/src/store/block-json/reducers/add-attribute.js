import { getUniqueClientId } from "../../../functions";
import { getUniqueAttributeName } from "../selectors";

const ALLOWED_ATTRIBUTE_TYPES = ["array", "number", "string", "object"];

const addAttribute = (state, action) => {
	let { name = "", type = "string", defaultValue = null } = action.payload;

	if (name === "") {
		name = getUniqueAttributeName(state, "attribute");
	}

	const attributes = [...state.attributes];
	const _type = (ALLOWED_ATTRIBUTE_TYPES.includes(type) && type) || "string";

	if (_type === "string" && defaultValue === null) {
		defaultValue = "";
	}

	attributes.push({
		name,
		type: _type,
		default: defaultValue ?? null,
		clientId: getUniqueClientId(),
	});

	state.attributes = attributes;
};

export default addAttribute;
