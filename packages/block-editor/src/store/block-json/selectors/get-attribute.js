const getAttribute = (state, attributeName) => {
	for (const { name, ...attribute } of state?.attributes || []) {
		if (name === attributeName) {
			return attribute;
		}
	}
	return null;
};

export default getAttribute;
