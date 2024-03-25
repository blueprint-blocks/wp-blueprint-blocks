import { createSelector } from "@reduxjs/toolkit";

const selectHandlePositions = (state) => state.handlePositions || {};
const selectClientId = (_, clientId) => clientId;

const getHandlePosition = createSelector(
	[selectHandlePositions, selectClientId],
	(handlePositions, clientId) => {
		if (clientId in handlePositions) {
			return handlePositions[clientId];
		}
		return null;
	},
);

export default getHandlePosition;
