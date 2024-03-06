import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "app",

	initialState: {
		navRect: {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
		},
		rect: {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
		},
	},

	reducers: {
		setNavRect(state, action) {
			state.navRect = {
				bottom: action.payload?.bottom || 0,
				height: action.payload?.height || 0,
				left: action.payload?.left || 0,
				right: action.payload?.right || 0,
				top: action.payload?.top || 0,
				width: action.payload?.width || 0,
			};
		},
		setRect(state, action) {
			state.rect = {
				bottom: action.payload?.bottom || 0,
				height: action.payload?.height || 0,
				left: action.payload?.left || 0,
				right: action.payload?.right || 0,
				top: action.payload?.top || 0,
				width: action.payload?.width || 0,
			};
		},
	},
});

const { actions, reducer } = slice;

export const { setNavRect, setRect } = actions;
export default reducer;
