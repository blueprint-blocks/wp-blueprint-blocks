const removeAttribute = (state, action) => {
	const attributeName = action.payload;
	state.attributes = [...state.attributes].filter(
		({ name }) => name !== attributeName,
	);
};

export default removeAttribute;
