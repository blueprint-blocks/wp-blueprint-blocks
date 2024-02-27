import { createSlice } from "@reduxjs/toolkit";

import { hasUnsavedChanges, isNewPost } from "./selectors";

const { postMetadata = {} } = blueprintBlocksEditorSettings;

const slice = createSlice({
  name: "postMetadata",

  initialState: {
    ...postMetadata,
    postId: postMetadata?.postId || null,
    changed: false,
  },

  reducers: {
    setChanged(state, action) {
      state.changed = !!action?.payload || false;
    },
    setPostId(state, action) {
      state.postId = action?.payload || null;
    },
  },
});

const { actions, reducer } = slice;

export const { setChanged, setPostId } = actions;

export { hasUnsavedChanges, isNewPost };

export default reducer;
