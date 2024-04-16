import { getAttributeIndex } from "../selectors";

const editAttribute = (state, action) => {
	const { clientId = null, ...attribute } = action.payload;
	const index = getAttributeIndex(state, { clientId });

	if (index === null) {
		return;
	}

	const attributes = [...state.attributes];

	attributes[index] = {
		...attributes[index],
		...attribute,
		clientId,
	};

	state.attributes = attributes;
};

export default editAttribute;
