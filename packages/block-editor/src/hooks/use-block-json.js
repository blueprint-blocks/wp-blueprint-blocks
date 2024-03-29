import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	addAttribute,
	editAttribute,
	getAttribute,
	getAttributeById,
	getAllAttributeNames,
	getUniqueAttributeName,
	renameAttribute,
	removeAttribute,
} from "../store/block-json";

import { setChanged } from "../store/post-metadata";

const useBlockJson = () => {
	const dispatch = useDispatch();

	const attributes = useSelector((state) => state.blockJson.attributes);

	const attributeNames = useSelector((state) =>
		getAllAttributeNames(state.blockJson),
	);

	const _addAttribute = useCallback((attributeName, attributeProps) => {
		dispatch(
			addAttribute({
				...attributeProps,
				name: attributeName,
			}),
		);
		dispatch(setChanged(true));
	}, []);

	const addEmptyAttribute = useCallback(() => {
		dispatch(addAttribute({}));
		dispatch(setChanged(true));
	}, []);

	const _editAttribute = useCallback((attributeName, attributeProps) => {
		dispatch(
			editAttribute({
				...attributeProps,
				name: attributeName,
			}),
		);
		dispatch(setChanged(true));
	}, []);

	const _getAttribute = useCallback(
		(attributeName) =>
			useSelector((state) =>
				getAttribute(state.blockJson, attributeName),
			),
		[],
	);

	const _getAttributeById = useCallback(
		(clientId) =>
			useSelector((state) => getAttributeById(state.blockJson, clientId)),
		[],
	);

	const _getUniqueAttributeName = useCallback(
		(attributeName) =>
			useSelector((state) =>
				getUniqueAttributeName(state.blockJson, attributeName),
			),
		[],
	);

	const _renameAttribute = useCallback((attributeName, newAttributeName) => {
		dispatch(
			renameAttribute({ name: attributeName, newName: newAttributeName }),
		);
		dispatch(setChanged(true));
	}, []);

	const _removeAttribute = useCallback((attributeName) => {
		dispatch(removeAttribute(attributeName));
		dispatch(setChanged(true));
	}, []);

	return {
		addAttribute: _addAttribute,
		addEmptyAttribute,
		blockAttributes: attributes,
		blockAttributeNames: attributeNames,
		editAttribute: _editAttribute,
		getAttribute: _getAttribute,
		getAttributeById: _getAttributeById,
		getUniqueAttributeName: _getUniqueAttributeName,
		renameAttribute: _renameAttribute,
		removeAttribute: _removeAttribute,
	};
};

export default useBlockJson;
