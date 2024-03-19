const unsetComponentAttribute = (state, action) => {
	const { clientId, attributeName } = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const component = {
		...state.blockComponents[clientId],
		attributes: state.blockComponents[clientId].attributes.filter(
			(attribute) => attribute.name !== attributeName,
		),
	};

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default unsetComponentAttribute;
