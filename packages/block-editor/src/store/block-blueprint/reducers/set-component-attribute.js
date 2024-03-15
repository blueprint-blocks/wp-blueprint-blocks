const setComponentAttribute = (state, action) => {
	const { clientId, attribute, value } = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const component = { ...state.blockComponents[clientId] };

	component[attribute] = value;

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default setComponentAttribute;
