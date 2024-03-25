import { createSelector } from "@reduxjs/toolkit";

let count = 0;

const selectAttributes = (state) => state.attributes;
const selectClientId = (_, clientId) => clientId;

const getAttributeById = createSelector(
	[selectAttributes, selectClientId],
	(attributes, attributeClientId) => {
		for (const { clientId, ...attribute } of attributes) {
			if (clientId === attributeClientId) {
				return attribute;
			}
		}

		return null;
	},
);

export default getAttributeById;
