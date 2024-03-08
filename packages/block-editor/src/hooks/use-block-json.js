import { useDispatch, useSelector } from "react-redux";

import { addAttribute } from "../store/block-json";

const useBlockJson = () => {
	const dispatch = useDispatch();

	const { attributes } = useSelector((state) => {
		return state.blockJson || {};
	});

	const _addAttribute = (attribute) => {
		dispatch(addAttribute(attribute));
	};

	const addEmptyAttribute = () => {
		dispatch(addAttribute({}));
	};

	return {
		addAttribute: _addAttribute,
		addEmptyAttribute,
		blockAttributes: attributes,
	};
};

export default useBlockJson;
