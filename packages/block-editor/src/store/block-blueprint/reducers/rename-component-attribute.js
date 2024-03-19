const renameComponentAttribute = (state, action) => {
	const { clientId, attributeName, newAttributeName } = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const attributeIndex = state.blockComponents[clientId].attributes.reduce(
		(attributeIndex, attribute, index) => {
			if (attributeIndex !== false) {
				return attributeIndex;
			}
			if (attribute.name === attributeName) {
				return index;
			}
			return false;
		},
		false,
	);

	const component = {
		...state.blockComponents[clientId],
	};

	if (attributeIndex !== false) {
		component.attributes[attributeIndex].name = newAttributeName;
	}

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default renameComponentAttribute;
