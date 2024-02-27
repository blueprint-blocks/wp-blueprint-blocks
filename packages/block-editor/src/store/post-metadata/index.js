import { createSlice } from "@reduxjs/toolkit";

import { hasUnsavedChanges, hasValidationErrors, isNewPost } from "./selectors";

const { postMetadata = {} } = blueprintBlocksEditorSettings;

const slice = createSlice({
  name: "postMetadata",

  initialState: {
    ...postMetadata,
    postId: postMetadata?.postId || null,
    changed: false,
    valid: true,
  },

  reducers: {
    setChanged(state, action) {
      state.changed = !!action?.payload || false;
    },
    setPostId(state, action) {
      state.postId = action?.payload || null;
    },
    setValid(state, action) {
      state.valid = !!action?.payload || false;
    },
  },
});

const { actions, reducer } = slice;

export const { setChanged, setPostId, setValid } = actions;

export { hasUnsavedChanges, hasValidationErrors, isNewPost };

export default reducer;
