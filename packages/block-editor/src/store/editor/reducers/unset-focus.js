const unsetFocus = (state, action) => {
	state.priorFocus = { ...state.currentFocus };
	state.currentFocus = null;
};

export default unsetFocus;
