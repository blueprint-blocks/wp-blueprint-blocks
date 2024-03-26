const removeFromTree = (clientId, tree = []) => {
	return tree
		.filter(([itemClientId, _]) => clientId !== itemClientId)
		.map(([itemClientId, itemChildren]) => [
			itemClientId,
			removeFromTree(clientId, itemChildren),
		]);
};

export default removeFromTree;
