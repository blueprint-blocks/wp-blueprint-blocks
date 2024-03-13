import { createSelector } from "@reduxjs/toolkit";

const selectCurrentFocus = (state) => state.currentFocus;
const selectClientId = (_, clientId) => clientId;

const componentHasFocus = createSelector(
	[selectCurrentFocus, selectClientId],
	(currentFocus, clientId) => clientId === currentFocus?.clientId,
);

export default componentHasFocus;
