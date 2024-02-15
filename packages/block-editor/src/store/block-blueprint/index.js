import { createSlice } from '@reduxjs/toolkit'

import initialState from './initial-state'
import reducers from './reducers'

import {
	getBlockComponent,
	getComponentContext,
	getComponentList,
	getComponentListDepth,
	getRawJson,
} from './selectors'

const slice = createSlice( {

	name: 'blockBlueprint',

	initialState,

	reducers,

} )

const { actions, reducer } = slice

export const {
	insertNewComponentAtPosition,
	insertDraggingComponentAtPosition,
	setComponentAttribute,
	startDraggingExistingComponent,
	startDraggingNewComponent,
	stopDragging,
	unsetComponentAttribute,
	unsetDraggingComponent,
} = actions

export {
	getBlockComponent,
	getComponentContext,
	getComponentList,
	getComponentListDepth,
	getRawJson,
}

export default reducer
