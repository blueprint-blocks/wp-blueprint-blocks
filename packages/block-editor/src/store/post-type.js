import { createSlice } from "@reduxjs/toolkit";

const { postType = {} } = blueprintBlocksEditorSettings;

const slice = createSlice({
	name: "postType",

	initialState: {
		...postType,
		name: postType?.name || null,
		restBase: postType?.restBase || null,
	},

	reducers: {
		setPostId(state, action) {
			state.postId = action?.payload || null;
		},
	},
});

const { actions, reducer } = slice;

export const { setPostId } = actions;
export default reducer;
