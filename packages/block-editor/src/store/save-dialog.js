import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "saveDialog",

	initialState: {
		hasShownOnce: false,
		visible: false,
	},

	reducers: {
		hideSaveDialog(state, action) {
			state.hasShownOnce = true;
			state.visible = false;
		},
		showSaveDialog(state, action) {
			state.visible = true;
		},
	},
});

const { actions, reducer } = slice;

export const { hideSaveDialog, showSaveDialog } = actions;
export default reducer;
