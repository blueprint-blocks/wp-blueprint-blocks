const getUniqueAttributeName = (name = "attribute", allNames) => {
	let index = 1;
	let indexedName = `${name}${index}`;

	while (allNames.includes(indexedName)) {
		index++;
		indexedName = `${name}${index}`;
	}

	return indexedName;
};

export default getUniqueAttributeName;
