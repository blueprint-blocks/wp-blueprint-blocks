import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

import { componentHasFocus, getFocus } from "./selectors";

const slice = createSlice({
	name: "editor",

	initialState: {
		currentFocus: null,
		priorFocus: null,
		height: 0,
		width: 0,
	},

	reducers,
});

const { actions, reducer } = slice;

export const { setFocus, setSize, unsetFocus } = actions;

export { componentHasFocus, getFocus };

export default reducer;
