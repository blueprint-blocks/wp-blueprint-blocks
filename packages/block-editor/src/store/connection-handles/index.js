import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

const slice = createSlice({
	name: "connectionHandles",

	initialState: {
		handlesFrom: {},
		handlesTo: {},
		draggingExistingConnection: null,
		draggingNewConnection: null,
	},

	reducers,
});

const { actions, reducer } = slice;

export const {
	removePosition,
	setPosition,
	startDraggingExistingConnection,
	startDraggingNewConnection,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
} = actions;
export default reducer;
