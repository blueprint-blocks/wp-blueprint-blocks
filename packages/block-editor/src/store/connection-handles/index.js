import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

const slice = createSlice({
	name: "connectionHandles",

	initialState: {
		handlesFrom: {},
		handlesTo: {},
		draggingConnection: null,
	},

	reducers,
});

const { actions, reducer } = slice;

export const {
	removePosition,
	setDraggingConnection,
	setPosition,
	unsetDraggingConnection,
} = actions;
export default reducer;
