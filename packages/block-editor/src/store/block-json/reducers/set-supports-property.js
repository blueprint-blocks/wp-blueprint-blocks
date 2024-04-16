import { getSupportsProperties } from "../../../functions";

const setSupportsProperty = (state, action) => {
	const { propertyName, value } = action.payload;
	if (!propertyName) {
		return;
	}

	const supportsProperty = getSupportsProperties(propertyName);

	if (!supportsProperty) {
		return;
	}

	let newSupports = { ...state.supports };

	if (supportsProperty.default === value) {
		newSupports = Object.fromEntries(
			Object.entries(newSupports).filter(
				([name, value]) => name !== supportsProperty.name,
			),
		);
	} else if (value === true) {
		newSupports[propertyName] =
			supportsProperty?.defaultValueWhenChecked || true;
	} else {
		newSupports[propertyName] = value;
	}

	state.supports = Object.keys(newSupports)
		.sort()
		.reduce((sorted, key) => {
			sorted[key] = newSupports[key];
			return sorted;
		}, {});
};

export default setSupportsProperty;
