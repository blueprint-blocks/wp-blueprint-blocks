const startDraggingExistingComponent = (state, action) => {
	state.existingDraggingComponent = action.payload;
	state.newDraggingComponent = null;
	state.isDragging = true;
};

export default startDraggingExistingComponent;
