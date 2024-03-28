import { createSelector, weakMapMemoize } from "reselect";

const selectAttributes = (state) => state.attributes;

const getAllAttributeNames = createSelector(
	[selectAttributes],
	(attributes) => attributes.map(({ name }) => name),
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getAllAttributeNames;
