const componentHasFocus = (state, clientId) => {
	return clientId === state.currentFocus?.clientId;
};

const getDraggingContext = (state, action) => {
	return state.currentDraggingContext || { context: null };
};

const getFocus = (state, action) => {
	return state.currentFocus || { context: null };
};

export { componentHasFocus, getDraggingContext, getFocus };
