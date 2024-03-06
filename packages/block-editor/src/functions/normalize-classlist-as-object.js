function normalizeClasslistAsObject(classList = null) {
	if (classList === null) {
		return {};
	}

	let newClassList = {};

	if (typeof classList === "string") {
		newClassList[classList] = true;
	} else if (Array.isArray(classList)) {
		classList.forEach((classListItem) => {
			newClassList = Object.assign(
				{},
				newClassList,
				normalizeClasslistAsObject(classListItem),
			);
		});
	} else if (typeof classList === "object") {
		Object.entries(classList).forEach(([name, value]) => {
			newClassList[name] = value;
		});
	}

	return newClassList;
}

export default normalizeClasslistAsObject;
