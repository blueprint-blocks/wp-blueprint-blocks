import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

import { getHandlePosition } from "./selectors";

const slice = createSlice({
	name: "blockConnections",

	initialState: {
		handlePositions: {},
	},

	reducers,
});

const { actions, reducer } = slice;

export const { setHandlePosition } = actions;

export { getHandlePosition };

export default reducer;
