import { createSelector } from "@reduxjs/toolkit";

const selectCurrentFocus = (state) => state.currentFocus;

const getDraggingContext = createSelector(
	[selectCurrentFocus],
	(currentFocus) => currentFocus || { context: null },
);

export default getDraggingContext;
