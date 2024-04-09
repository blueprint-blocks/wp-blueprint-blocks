import parseComponentForClient from "./parse-component-for-client";

const parseComponentTree = (tree = [], components = []) => {
	if (!tree) {
		return [];
	}

	let clientIds = [];

	tree.forEach(({ children = [], ...component }) => {
		let childClientIds = [];

		if (children.length > 0) {
			[childClientIds, components] = parseComponentTree(
				children,
				components,
			);
		}

		const [clientId, parsedComponent] = parseComponentForClient(component);
		components[clientId] = parsedComponent;

		clientIds.push([clientId, childClientIds]);
	});

	return [clientIds, components];
};

export default parseComponentTree;
