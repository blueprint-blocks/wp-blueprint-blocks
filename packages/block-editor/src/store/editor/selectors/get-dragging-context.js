import { createSelector } from "@reduxjs/toolkit";

const selectCurrentDraggingContext = (state) => state.currentDraggingContext;

const getDraggingContext = createSelector(
	[selectCurrentDraggingContext],
	(currentDraggingContext) => currentDraggingContext || { context: null },
);

export default getDraggingContext;
