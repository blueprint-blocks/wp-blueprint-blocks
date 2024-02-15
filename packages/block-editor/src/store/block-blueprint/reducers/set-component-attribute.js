const setComponentAttribute = ( state, action ) => {
	const {
		clientId,
		attribute,
		value,
	} = action.payload

	if ( !( clientId in state.blockComponents ) ) {
		return
	}

	state.blockComponents = {
		...state.blockComponents,
		[ clientId ]: {
			...state.blockComponents[ clientId ],
			[ attribute ]: value,
		},
	}
}

export default setComponentAttribute
