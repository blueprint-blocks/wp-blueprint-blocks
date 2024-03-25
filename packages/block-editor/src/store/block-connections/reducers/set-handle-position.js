const setHandlePosition = (state, action) => {
	const { clientId, x = 0, y = 0 } = action.payload;

	if (
		x === state.handlePositions?.[clientId]?.x &&
		y === state.handlePositions?.[clientId]?.y
	) {
		return;
	}

	const position = {
		x: (x && !Number.isNaN(x) && x) || 0,
		y: (y && !Number.isNaN(y) && y) || 0,
	};

	state.handlePositions = {
		...state.handlePositions,
		[clientId]: position,
	};
};

export default setHandlePosition;
