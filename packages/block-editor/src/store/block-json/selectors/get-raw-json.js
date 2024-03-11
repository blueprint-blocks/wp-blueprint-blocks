const getRawJson = (state) => {
	return {
		...state,
		attributes: Object.fromEntries(
			[...(state.attributes || [])].map(({ name, ...attribute }) => [
				name,
				attribute,
			]),
		),
	};
};

export default getRawJson;
