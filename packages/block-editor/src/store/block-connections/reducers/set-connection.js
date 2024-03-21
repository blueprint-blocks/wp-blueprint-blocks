const setConnection = (state, action) => {
	const { clientId, context = "to", x = 0, y = 0 } = action.payload;

	const position = {
		x: (x && !Number.isNaN(x) && x) || 0,
		y: (y && !Number.isNaN(y) && y) || 0,
	};

	if (context === "from") {
		state.handlesFrom = {
			...state.handlesFrom,
			[clientId]: position,
		};
	} else {
		state.handlesTo = {
			...state.handlesTo,
			[clientId]: position,
		};
	}
};

export default setConnection;
