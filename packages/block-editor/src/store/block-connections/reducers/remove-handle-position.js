const removeHandlePosition = (state, action) => {
	/*const { id, name } = action.payload;

	state.allHandles = Object.fromEntries(
		Object.entries(state.allHandles).filter(([key, value]) => key !== id),
	);

	if (!name) {
		return;
	}

	if (state.handlesByName?.[name]?.from === id) {
		state.handlesByName = {
			...state.handlesByName,
			[name]: {
				from: null,
				to: state.handlesByName?.[name]?.to || [],
			},
		};
	} else if (state.handlesByName?.[name]?.to.includes(id)) {
		state.handlesByName = {
			...state.handlesByName,
			[name]: {
				from: state.handlesByName?.[name]?.from || null,
				to: (state.handlesByName?.[name]?.to || []).filter(
					(to) => to !== id,
				),
			},
		};
	}*/
};

export default removeHandlePosition;
