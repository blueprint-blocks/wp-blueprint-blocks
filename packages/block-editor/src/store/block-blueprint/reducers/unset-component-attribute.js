const unsetComponentAttribute = (state, action) => {
	const { clientId, attribute } = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const component = Object.fromEntries(
		Object.entries(state.blockComponents[clientId]).filter(
			([name, _]) => name !== attribute,
		),
	);

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default unsetComponentAttribute;
