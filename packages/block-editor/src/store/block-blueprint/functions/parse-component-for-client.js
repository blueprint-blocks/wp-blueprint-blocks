import { getUniqueClientId } from "../../../functions";

const parseComponentForClient = (component) => [
	getUniqueClientId(),
	{
		attributes: Object.entries(component)
			.filter(([name, _]) => !["tagName", "type"].includes(name))
			.map(([name, value]) => ({
				clientId: getUniqueClientId(),
				name,
				value,
			})),
		tagName: component?.tagName || null,
		type: component?.type || "html",
	},
];

export default parseComponentForClient;
