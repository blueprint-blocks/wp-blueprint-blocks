const getAttributeIndex = (state, attributeName) => {
	if (!state?.attributes?.length) {
		return null;
	}

	for (let i = 0; i < state.attributes.length; i++) {
		if (state.attributes[i].name === attributeName) {
			return i;
		}
	}

	return null;
};

export default getAttributeIndex;
