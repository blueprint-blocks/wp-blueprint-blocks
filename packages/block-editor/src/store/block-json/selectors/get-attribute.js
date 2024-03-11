const getAttribute = (state, attributeName) => {
	return state?.attributes?.[attributeName] || null;
};

export default getAttribute;
