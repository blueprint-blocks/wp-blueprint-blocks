const setDraggingConnection = (state, action) => {
	const { attributeName, from, to } = action.payload;

	state.draggingConnection = {
		attributeName,
		from: {
			x: from?.x || null,
			y: from?.y || null,
		},
		to: {
			x: to?.x || null,
			y: to?.y || null,
		},
	};
};

export default setDraggingConnection;
