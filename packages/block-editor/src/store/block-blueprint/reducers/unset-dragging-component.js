const unsetDraggingComponent = ( state, action ) => {
	state.existingDraggingComponent = null
	state.newDraggingComponent = null
}

export default unsetDraggingComponent
