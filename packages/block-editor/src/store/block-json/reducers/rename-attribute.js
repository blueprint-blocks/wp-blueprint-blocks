import { getAttributeIndex } from "../selectors";

const renameAttribute = (state, action) => {
	const { name = "", newName = "" } = action.payload;
	const index = getAttributeIndex(state, name);

	if (index === null) {
		return;
	}

	const attributes = [...state.attributes];

	attributes[index] = {
		...attributes[index],
		name: newName,
	};

	state.attributes = attributes;
};

export default renameAttribute;
