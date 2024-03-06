import { blockComponents } from "../data";
import getComponentProperties from "./get-component-properties";

function getComponentAttributeType(componentType = "html", attributeName) {
	const component = getComponentProperties(componentType);

	if (
		component &&
		attributeName in Object.keys(component?.attributes || {})
	) {
		return component.attributes[attributeName]?.type || "string";
	}

	if (attributeName in blockComponents.attributes) {
		return blockComponents.attributes[attributeName]?.type || "string";
	}

	return "string";
}

export default getComponentAttributeType;
