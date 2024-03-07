import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

const slice = createSlice({
	name: "connectionHandles",

	initialState: {
		handlesFrom: {},
		handlesTo: {},
	},

	reducers,
});

const { actions, reducer } = slice;

export const { removePosition, setPosition } = actions;
export default reducer;
