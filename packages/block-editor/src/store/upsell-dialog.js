import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "upsellDialog",

  initialState: {
    visible: false,
  },

  reducers: {
    hideUpsellDialog(state, action) {
      state.visible = false;
    },
    showUpsellDialog(state, action) {
      state.visible = true;
    },
  },
});

const { actions, reducer } = slice;

export const { hideUpsellDialog, showUpsellDialog } = actions;
export default reducer;
