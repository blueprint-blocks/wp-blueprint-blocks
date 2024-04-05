import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initial-state";
import reducers from "./reducers";

import {
	getAllAttributeNames,
	getAttribute,
	getAttributeById,
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
	getBlockVersion,
	getRawJson,
	getUniqueAttributeName,
} from "./selectors";

import {
	validateFullNameFormat,
	validateName,
	validateNamespace,
	validateNameClash,
	validateRequired,
	validateTitle,
} from "./validation";

const slice = createSlice({
	name: "blockJson",
	initialState,
	reducers,
});

const { actions, reducer } = slice;

export const {
	addAttribute,
	editAttribute,
	renameAttribute,
	removeAttribute,
	setCategory,
	setDescription,
	setIcon,
	setKeywords,
	setName,
	setSupportsProperty,
	setTextdomain,
	setTitle,
	setVersion,
} = actions;

export {
	getAllAttributeNames,
	getAttribute,
	getAttributeById,
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
	getBlockVersion,
	getRawJson,
	getUniqueAttributeName,
};

export {
	validateFullNameFormat,
	validateName,
	validateNamespace,
	validateNameClash,
	validateRequired,
	validateTitle,
};

export default reducer;
