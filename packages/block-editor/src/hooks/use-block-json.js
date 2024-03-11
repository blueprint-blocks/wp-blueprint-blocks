import { useDispatch, useSelector } from "react-redux";

import {
	addAttribute,
	editAttribute,
	getAttribute,
	renameAttribute,
	removeAttribute,
} from "../store/block-json";

const useBlockJson = () => {
	const dispatch = useDispatch();

	const { attributes } = useSelector((state) => {
		return state.blockJson;
	});

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

	const _renameAttribute = (attributeName, newAttributeName) => {
		dispatch(
			renameAttribute({ name: attributeName, newName: newAttributeName }),
		);
	};

	const _getAttribute = (attributeName) =>
		useSelector((state) => {
			return getAttribute(state.blockJson, attributeName);
		});

	return {
		addAttribute: _addAttribute,
		addEmptyAttribute,
		blockAttributes: attributes,
		editAttribute: _editAttribute,
		getAttribute: _getAttribute,
		renameAttribute: _renameAttribute,
	};
};

export default useBlockJson;
