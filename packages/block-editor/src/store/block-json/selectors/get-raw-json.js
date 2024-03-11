const getRawJson = (state) => {
	return {
		...state,
		attributes: Object.fromEntries(
			[...(state.attributes || [])].map(
				({ name, type, ...attribute }) => [
					name,
					{ type, default: attribute.default },
				],
			),
		),
	};
};

export default getRawJson;
