import { createSelector, weakMapMemoize } from "reselect";

const selectAttributes = (state) => state.attributes;
const selectAttributeName = (_, { attributeName }) => attributeName;
const selectClientId = (_, { clientId }) => clientId;

const getAttributeIndex = createSelector(
	[selectAttributes, selectAttributeName, selectClientId],
	(attributes, attributeName, clientId) => {
		for (let i = 0; i < attributes.length; i++) {
			if (
				attributes[i].clientId === clientId ||
				attributes[i].name === attributeName
			) {
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
