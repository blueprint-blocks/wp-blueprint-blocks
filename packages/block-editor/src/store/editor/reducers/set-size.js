const setSize = (state, action) => {
	state.height = action.payload?.height || 0;
	state.width = action.payload?.width || 0;
};

export default setSize;
