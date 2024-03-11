import { useDispatch, useSelector } from "react-redux";

import {
	addAttribute,
	editAttribute,
	getAttribute,
	getAllAttributeNames,
	renameAttribute,
	removeAttribute,
} from "../store/block-json";

const useBlockJson = () => {
	const dispatch = useDispatch();

	const { attributes } = useSelector((state) => {
		return state.blockJson;
	});

	const attributeNames = useSelector((state) =>
		getAllAttributeNames(state.blockJson),
	);

	const _addAttribute = (attributeName, attributeProps) => {
		dispatch(
			addAttribute({
				...attributeProps,
				name: attributeName,
			}),
		);
	};

	const addEmptyAttribute = () => {
		dispatch(addAttribute({}));
	};

	const _editAttribute = (attributeName, attributeProps) => {
		dispatch(
			editAttribute({
				...attributeProps,
				name: attributeName,
			}),
		);
	};

	const _getAttribute = (attributeName) =>
		useSelector((state) => {
			return getAttribute(state.blockJson, attributeName);
		});

	const _renameAttribute = (attributeName, newAttributeName) => {
		dispatch(
			renameAttribute({ name: attributeName, newName: newAttributeName }),
		);
	};

	const _removeAttribute = (attributeName) => {
		dispatch(removeAttribute(attributeName));
	};

	return {
		addAttribute: _addAttribute,
		addEmptyAttribute,
		blockAttributes: attributes,
		blockAttributeNames: attributeNames,
		editAttribute: _editAttribute,
		getAttribute: _getAttribute,
		renameAttribute: _renameAttribute,
		removeAttribute: _removeAttribute,
	};
};

export default useBlockJson;
