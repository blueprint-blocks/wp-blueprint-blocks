import getAllAttributeNames from "./get-all-attribute-names";

const getUniqueAttributeName = (name = "attribute", state) => {
	let index = 1;
	let indexedName = `${name}${index}`;

	while (getAllAttributeNames(state).includes(indexedName)) {
		index++;
		indexedName = `${name}${index}`;
	}

	return indexedName;
};

export default getUniqueAttributeName;
