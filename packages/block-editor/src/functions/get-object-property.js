const getObjectProperty = (object, identifier) => {
	if (identifier.indexOf(".") === -1) {
		return object?.[identifier] || null;
	}

	const index = identifier.indexOf(".");
	const propertyName = identifier.substring(0, index);
	const subIdentifier = identifier.substring(index + 1);

	if (!(propertyName in object)) {
		return null;
	}

	return getObjectProperty(object[propertyName], subIdentifier);
};

export default getObjectProperty;
