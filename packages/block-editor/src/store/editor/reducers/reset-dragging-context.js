const resetDraggingContext = (state, action) => {
	state.priorDraggingContext = state.currentDraggingContext;
	state.currentDraggingContext = null;
};

export default resetDraggingContext;
