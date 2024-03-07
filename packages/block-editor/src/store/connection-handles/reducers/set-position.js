const setPosition = (state, action) => {
	const {
		attributeName,
		clientId,
		context = "to",
		x = 0,
		y = 0,
	} = action.payload;

	if (context === "from") {
		state.handlesFrom = {
			...state.handlesFrom,
			[attributeName]: {
				x: (x && !Number.isNaN(x) && x) || 0,
				y: (y && !Number.isNaN(y) && y) || 0,
			},
		};
	} else {
		state.handlesTo = {
			...state.handlesTo,
			[clientId]: {
				x: (x && !Number.isNaN(x) && x) || 0,
				y: (y && !Number.isNaN(y) && y) || 0,
			},
		};
	}
};

export default setPosition;
