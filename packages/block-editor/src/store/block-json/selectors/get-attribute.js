import { createSelector, weakMapMemoize } from "reselect";

let count = 0;

const selectAttributes = (state) => state.attributes;
const selectAttributeName = (_, attributeName) => attributeName;

const getAttribute = createSelector(
	[selectAttributes, selectAttributeName],
	(attributes, attributeName) => {
		for (const { name, type = "string", ...attribute } of attributes) {
			if (name === attributeName) {
				return {
					...attribute,
					name,
					type,
				};
			}
		}

		return null;
	},
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getAttribute;
