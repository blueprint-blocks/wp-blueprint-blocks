import { getUniqueClientId } from "../../../functions";

const setComponentAttribute = (state, action) => {
	const { clientId, attributeName, attributeValue } = action.payload;

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
		component.attributes[attributeIndex].value = attributeValue;
	} else {
		component.attributes.push({
			clientId: getUniqueClientId(),
			name: attributeName,
			value: attributeValue,
		});
	}

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};
};

export default setComponentAttribute;
