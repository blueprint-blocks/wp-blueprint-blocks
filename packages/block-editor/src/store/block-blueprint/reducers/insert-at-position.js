const insertAtPosition = ({
	clientId,
	subList = [],
	componentList = [],
	position = [],
}) => {
	let index = ((Array.isArray(position) && position) || [position])?.[0];

	if (componentList?.length > 0 && componentList?.length < index) {
		return componentList;
	}

	if (position.length > 1) {
		componentList[index][1] = insertAtPosition({
			clientId,
			subList,
			componentList: componentList[index][1] || [],
			position: position.slice(1),
		});

		return componentList;
	}

	return [
		...componentList.slice(0, index),
		[clientId, subList],
		...componentList.slice(index),
	];
};

export default insertAtPosition;
