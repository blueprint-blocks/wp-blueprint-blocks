import { createSelector } from "reselect";

const selectAttributes = (state) => state.attributes;

const getAllAttributeNames = createSelector([selectAttributes], (attributes) =>
	attributes.map(({ name }) => name),
);

export default getAllAttributeNames;
