import { createSlice } from "@reduxjs/toolkit";

import reducers from "./reducers";

import { componentHasFocus, getDraggingContext, getFocus } from "./selectors";

const slice = createSlice({
	name: "editor",

	initialState: {
		isDragging: false,
		currentDraggingContext: null,
		priorDraggingContext: null,
		currentFocus: null,
		priorFocus: null,
		height: 0,
		width: 0,
	},

	reducers,
});

const { actions, reducer } = slice;

export const {
	resetDraggingContext,
	setFocus,
	setSize,
	startDragging,
	stopDragging,
	unsetFocus,
} = actions;

export { componentHasFocus, getDraggingContext, getFocus };

export default reducer;
