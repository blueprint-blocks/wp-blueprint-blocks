import { createSelector } from "@reduxjs/toolkit";

let count = 0;

const selectAttributes = (state) => state.attributes;
const selectAttributeName = (_, attributeName) => attributeName;

const getAttribute = createSelector(
	[selectAttributes, selectAttributeName],
	(attributes, attributeName) => {
		count++;
		console.log(`selector ${count}:`, attributeName);
		for (const { name, ...attribute } of attributes) {
			if (name === attributeName) {
				return {
					...attribute,
					name,
				};
			}
		}

		return null;
	},
);

export default getAttribute;
