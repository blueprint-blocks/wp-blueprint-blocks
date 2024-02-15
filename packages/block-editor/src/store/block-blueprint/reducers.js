import { getUniqueClientId } from '../../functions'
import { getComponentContext, getComponentList } from './selectors'

const getAtPosition = ( { componentList = [], position = [] } ) => {

	let index = ( Array.isArray( position ) && position || [ position ] )?.[ 0 ]

	if ( componentList?.length > 0 && componentList?.length < index ) {
		return null
	}

	if ( position.length > 1 ) {
		return getAtPosition( {
			componentList: ( componentList[ index ][ 1 ] || [] ),
			position: position.slice( 1 ),
		} )
	}

	return componentList[ index ]

}

const insertAtPosition = ( { clientId, subList = [], componentList = [], position = [] } ) => {

	let index = ( Array.isArray( position ) && position || [ position ] )?.[ 0 ]

	if ( componentList?.length > 0 && componentList?.length < index ) {
		return componentList
	}

	if ( position.length > 1 ) {
		componentList[ index ][ 1 ] = insertAtPosition( {
			clientId,
			subList,
			componentList: ( componentList[ index ][ 1 ] || [] ),
			position: position.slice( 1 ),
		} )

		return componentList
	}

	return [
		...componentList.slice( 0, index ),
		[ clientId, subList ],
		...componentList.slice( index )
	]

}

const removeAtPosition = ( { componentList = [], position = [] } ) => {

	let index = ( Array.isArray( position ) && position || [ position ] )?.[ 0 ]

	if ( componentList?.length > 0 && componentList?.length < index ) {
		return componentList
	}

	if ( position.length > 1 ) {
		componentList[ index ][ 1 ] = removeAtPosition( {
			componentList: ( componentList[ index ][ 1 ] || [] ),
			position: position.slice( 1 ),
		} )

		return componentList
	}

	return [
		...componentList.slice( 0, index ),
		...componentList.slice( index + 1 )
	]

}

const insertDraggingComponentAtPosition = ( state, action ) => {
	const {
		context = 'edit',
		position = [],
	} = action.payload || {}

	if ( !state.newDraggingComponent && !state.existingDraggingComponent ) {
		return
	}

	if ( !!state.newDraggingComponent ) {
		insertNewComponentAtPosition( state, {
			payload: {
				component: state.newDraggingComponent,
				context,
				position,
			}
		} )
	} else if ( !!state.existingDraggingComponent ) {
		const currentContext = getComponentContext(state, state.existingDraggingComponent)

		if ( context === currentContext.context ) {
			// compare positions and decrement if dragging higher
			for ( let i = 0; i < currentContext.position.length; i++ ) {
				if ( position.length > i && position[ i ] > currentContext.position[ i ] ) {
					position[ i ]--
					break
				}
			}
		}

		insertExistingComponentAtPosition( state, {
			payload: {
				context: currentContext.context,
				newContext: context,
				position: currentContext.position,
				newPosition: position,
			}
		} )
	}

	unsetDraggingComponent( state )
}

const insertExistingComponentAtPosition = ( state, action ) => {
	const {
		context,
		newContext,
		position = [],
		newPosition = [],
	} = action.payload

	let component = getAtPosition( {
		componentList: getComponentList( state, context ),
		position,
	} )

	if ( component && component[ 0 ] ) {
		let componentList = removeAtPosition( {
			componentList: getComponentList( state, context ),
			position,
		} )

		if ( context === newContext ) {
			componentList = insertAtPosition( {
				componentList,
				clientId: component[ 0 ],
				subList: component[ 1 ],
				position: newPosition,
			} )

			setComponentList( state, {
				payload: {
					context,
					componentList,
				},
			} )
		} else {
			setComponentList( state, {
				payload: {
					context,
					componentList,
				},
			} )

			let newComponentList = insertAtPosition( {
				componentList: getComponentList( state, newContext ),
				clientId: component[ 0 ],
				subList: component[ 1 ],
				position: newPosition,
			} )

			setComponentList( state, {
				payload: {
					context: newContext,
					componentList: newComponentList,
				},
			} )
		}
	}
}

const insertNewComponentAtPosition = ( state, action ) => {
	const {
		context = 'edit',
		component = {},
		position = [],
	} = action.payload || {}

	const clientId = getUniqueClientId()

	let componentList = insertAtPosition( {
		clientId,
		componentList: getComponentList( state, context ),
		position,
	} )

	state.blockComponents = {
		...state.blockComponents,
		[ clientId ]: component,
	}

	setComponentList( state, {
		payload: {
			context,
			componentList,
		},
	} )
}

const setComponentList = ( state, action ) => {
	const {
		context = 'edit',
		componentList = [],
	} = action.payload

	if ( context === 'edit' ) {
		return state.blockEdit = componentList
	} else if ( context === 'toolbar' ) {
		return state.blockToolbar = componentList
	} else if ( context === 'save' ) {
		return state.blockSave = componentList
	} else if ( context === 'sidebar' ) {
		return state.blockSidebar = componentList
	}
}

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

const unsetComponentAttribute = ( state, action ) => {
	const {
		clientId,
		attribute,
	} = action.payload

	if ( !( clientId in state.blockComponents ) ) {
		return
	}

	state.blockComponents = {
		...state.blockComponents,
		[ clientId ]: Object.fromEntries( Object.entries( state.blockComponents[ clientId ] ).filter( ( [ key, _ ] ) => (
			key !== attribute
		) ) ),
	}
}

const startDraggingExistingComponent = ( state, action ) => {
	state.existingDraggingComponent = action.payload
	state.newDraggingComponent = null
	state.isDragging = true
}

const startDraggingNewComponent = ( state, action ) => {
	state.existingDraggingComponent = null
	state.newDraggingComponent = action.payload || {}
	state.isDragging = true
}

const stopDragging = ( state, action ) => {
	state.isDragging = false
}

const unsetDraggingComponent = ( state, action ) => {
	state.existingDraggingComponent = null
	state.newDraggingComponent = null
}

const reducers = {
	insertNewComponentAtPosition,
	insertDraggingComponentAtPosition,
	setComponentAttribute,
	setComponentList,
	startDraggingExistingComponent,
	startDraggingNewComponent,
	stopDragging,
	unsetComponentAttribute,
	unsetDraggingComponent,
}

export default reducers
