const startDraggingNewComponent = ( state, action ) => {
	state.existingDraggingComponent = null
	state.newDraggingComponent = action.payload || {}
	state.isDragging = true
}

export default startDraggingNewComponent
