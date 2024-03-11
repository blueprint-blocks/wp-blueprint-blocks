const setSupportsProperty = (state, action) => {
	const { property, value } = action.payload;
	if (!property?.name) {
		return;
	}
	state.supports = {
		...state.supports,
		[property.name]: value,
	};
};

export default setSupportsProperty;
