import { createSelector, weakMapMemoize } from "reselect";

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
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getAttributeById;
