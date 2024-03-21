const startDraggingNewConnection = (state, action) => {
	const { clientId, context = "from", from, to } = action.payload;

	state.draggingNewConnection = {
		clientId,
		context: (context === "from" && "from") || "to",
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

export default startDraggingNewConnection;
