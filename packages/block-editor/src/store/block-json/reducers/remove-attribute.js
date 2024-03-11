const removeAttribute = (state, action) => {
	const name = action.payload;

	state.attributes = Object.fromEntries(
		Object.entries(state.attributes).filter(([key, value]) => key !== name),
	);
};

export default removeAttribute;
