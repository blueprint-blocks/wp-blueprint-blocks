import { createSelector, weakMapMemoize } from "reselect";

const selectAttributes = (state) => state.attributes;
const selectAttributeName = (_, attributeName) => attributeName;

const getAttributeIndex = createSelector(
	[selectAttributes, selectAttributeName],
	(attributes, attributeName) => {
		for (let i = 0; i < attributes.length; i++) {
			if (attributes[i].name === attributeName) {
				return i;
			}
		}

		return null;
	},
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getAttributeIndex;
