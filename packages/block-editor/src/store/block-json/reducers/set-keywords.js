const setKeywords = (state, action) => {
	state.keywords = (
		(Array.isArray(action.payload) && action.payload) || [action.payload]
	).slice(0, 3);
};

export default setKeywords;
