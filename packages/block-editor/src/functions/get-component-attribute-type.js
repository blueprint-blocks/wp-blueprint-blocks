import getComponentProperties from "./get-component-properties";

function getComponentAttributeType(componentType = "html", attributeName) {
	const component = getComponentProperties(componentType);
	return component.attributes?.[attributeName]?.type || "string";
}

export default getComponentAttributeType;
