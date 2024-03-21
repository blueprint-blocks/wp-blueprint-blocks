const startDraggingExistingConnection = (state, action) => {
	const { attributeName, clientId } = action.payload;

	state.draggingExistingConnection = {
		attributeName,
		clientId,
	};
};

export default startDraggingExistingConnection;
