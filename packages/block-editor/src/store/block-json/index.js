import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initial-state";
import reducers from "./reducers";

import {
	getAttribute,
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
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
	removeAttribute,
	setCategory,
	setDescription,
	setIcon,
	setKeywords,
	setName,
	setSupportsProperty,
	setTitle,
} = actions;

export {
	getAttribute,
	getBlockClassName,
	getBlockName,
	getBlockNamespace,
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
