import { createSelector } from "@reduxjs/toolkit";

const selectAttributes = (state) => state.attributes || [];
const selectCategory = (state) => state.category || "";
const selectDescription = (state) => state.description || "";
const selectIcon = (state) => state.icon || "";
const selectKeywords = (state) => state.keywords || [];
const selectName = (state) => state.name || "";
const selectSupports = (state) => state.supports || {};
const selectTextdomain = (state) => state.textdomain || "";
const selectTitle = (state) => state.title || "";

const getRawJson = createSelector(
	[
		selectAttributes,
		selectCategory,
		selectDescription,
		selectIcon,
		selectKeywords,
		selectName,
		selectSupports,
		selectTextdomain,
		selectTitle,
	],
	(
		attributes,
		category,
		description,
		icon,
		keywords,
		name,
		supports,
		textdomain,
		title,
	) => ({
		$schema: "https://schemas.wp.org/trunk/block.json",
		apiVersion: 3,
		name,
		title,
		description,
		icon,
		keywords,
		category,
		attributes: Object.fromEntries(
			attributes.map(({ clientId, name, ...attribute }) => {
				let _attribute = structuredClone(attribute);

				if (
					_attribute?.type === "string" &&
					_attribute?.default === null
				) {
					_attribute.default = "";
				}

				return [name, _attribute];
			}),
		),
		supports,
		textdomain,
	}),
);

export default getRawJson;
