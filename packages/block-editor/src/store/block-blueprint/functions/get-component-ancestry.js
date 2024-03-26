const getComponentAncestry = (clientId, tree = []) => {
	for (const [index, component] of tree.entries()) {
		if (clientId === component[0]) {
			return [index];
		}

		const itemAncestry = getComponentAncestry(clientId, component[1]);

		if (itemAncestry !== false) {
			return [index, ...itemAncestry];
		}
	}

	return false;
};

export default getComponentAncestry;
