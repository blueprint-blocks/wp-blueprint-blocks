import { getComponentProperties, getUniqueClientId } from "../../../functions";

const parseComponentForClient = (component) => {
	const componentProperties = getComponentProperties(
		component?.type || "html",
	);

	const componentAttributes = Object.entries(component)
		.filter(([name, _]) => !["tagName", "type"].includes(name))
		.map(([name, value]) => ({
			clientId: getUniqueClientId(),
			name,
			value,
		}));

	if (
		component.tagName !== null &&
		component.tagName !== componentProperties.defaultAttributes?.tagName
	) {
		componentAttributes.push({
			clientId: getUniqueClientId(),
			name: "tagName",
			value: component.tagName,
		});
	}

	return [
		getUniqueClientId(),
		{
			attributes: componentAttributes,
			tagName: component?.tagName || null,
			type: component?.type || "html",
		},
	];
};

export default parseComponentForClient;
