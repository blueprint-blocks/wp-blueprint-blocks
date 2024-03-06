const startDragging = (state, action) => {
	state.currentDraggingContext = action.payload;
	state.isDragging = true;
};

export default startDragging;
