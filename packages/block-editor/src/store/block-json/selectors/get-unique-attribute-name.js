import { createSelector } from "@reduxjs/toolkit";
import getAllAttributeNames from "./get-all-attribute-names";

const selectAttributeName = (_, attributeName) => attributeName;

const getUniqueAttributeName = createSelector(
	[getAllAttributeNames, selectAttributeName],
	(allAttributeNames, attributeName) => {
		let index = 1;
		let indexedName = `${attributeName}${index}`;

		while (allAttributeNames.includes(indexedName)) {
			index++;
			indexedName = `${attributeName}${index}`;
		}

		return indexedName;
	},
);

export default getUniqueAttributeName;
