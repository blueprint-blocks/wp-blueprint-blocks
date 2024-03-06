const setFocus = (state, action) => {
	const { context = null, ...props } = action.payload || {};

	if (context === null) {
		return;
	}

	state.currentFocus = {
		context,
		...props,
	};
};

export default setFocus;
