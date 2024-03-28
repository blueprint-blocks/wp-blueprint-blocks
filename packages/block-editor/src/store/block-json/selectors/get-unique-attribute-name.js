import { createSelector, weakMapMemoize } from "reselect";
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
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getUniqueAttributeName;
