import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initial-state";
import reducers from "./reducers";

import {
	getComponent,
	getComponentAttribute,
	getComponentAttributes,
	getComponentTagName,
	getComponentType,
	getComponentContext,
	getComponentList,
	getComponentListDepth,
	getRawJson,
} from "./selectors";

const slice = createSlice({
	name: "blockBlueprint",
	initialState,
	reducers,
});

const { actions, reducer } = slice;

export const {
	getAtPosition,
	insertAtPosition,
	insertExistingComponentAtPosition,
	insertNewComponentAtPosition,
	insertDraggingComponentAtPosition,
	moveComponentToPosition,
	renameComponentAttribute,
	removeComponent,
	removeAtPosition,
	setComponentAttribute,
	setComponentList,
	startDraggingExistingComponent,
	startDraggingNewComponent,
	stopDragging,
	unsetComponentAttribute,
	unsetDraggingComponent,
} = actions;

export {
	getComponent,
	getComponentAttribute,
	getComponentAttributes,
	getComponentTagName,
	getComponentType,
	getComponentContext,
	getComponentList,
	getComponentListDepth,
	getRawJson,
};

export default reducer;
