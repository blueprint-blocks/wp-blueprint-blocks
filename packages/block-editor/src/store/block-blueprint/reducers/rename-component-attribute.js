const renameComponentAttribute = (state, action) => {
	const { clientId, attributeName, newAttributeName } = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const component = Object.fromEntries(
		Object.entries(state.blockComponents[clientId]).map(([name, value]) => {
			if (name === attributeName) {
				return [newAttributeName, value];
			}
			return [name, value];
		}),
	);

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default renameComponentAttribute;
