import { createSelector, weakMapMemoize } from "reselect";

const selectCurrentFocus = (state) => state.currentFocus;

const getFocus = createSelector(
	[selectCurrentFocus],
	(currentFocus) => currentFocus || { context: null },
	{
		memoize: weakMapMemoize,
		argsMemoize: weakMapMemoize,
	},
);

export default getFocus;
