import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

import { getHandlePosition } from "./selectors";

const slice = createSlice({
	name: "blockConnections",

	initialState: {
		connections: {},
		handlePositions: {},
		handlesFrom: {},
		handlesTo: {},
		draggingExistingConnection: null,
		draggingNewConnection: null,
	},

	reducers,
});

const { actions, reducer } = slice;

export const {
	removeHandlePosition,
	setHandlePosition,
	startDraggingExistingConnection,
	startDraggingNewConnection,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
} = actions;

export { getHandlePosition };

export default reducer;
