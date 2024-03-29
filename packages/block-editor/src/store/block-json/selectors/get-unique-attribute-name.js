import { createSelector, weakMapMemoize } from "reselect";
import getAllAttributeNames from "./get-all-attribute-names";
import { camelize } from "../../../functions";

const selectAttributeName = (_, attributeName) => attributeName;

const getUniqueAttributeName = createSelector(
	[getAllAttributeNames, selectAttributeName],
	(allAttributeNames, attributeName) => {
		let index = 1;
		let indexedName = `${camelize(attributeName)}${index}`;

		while (allAttributeNames.includes(indexedName)) {
			index++;
			indexedName = `${camelize(attributeName)}${index}`;
		}

		return indexedName;
	},
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getUniqueAttributeName;
