const getComponentAncestors = (clientId, tree = []) => {
	for (const component of tree) {
		if (clientId === component[0]) {
			return component[1].flat(Infinity);
		}

		const itemAncestors = getComponentAncestors(clientId, component[1]);

		if (itemAncestors.length > 0) {
			return itemAncestors;
		}
	}

	return [];
};

export default getComponentAncestors;
