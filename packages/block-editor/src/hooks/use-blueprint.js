import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setComponentAttribute,
	unsetComponentAttribute,
} from "../store/block-blueprint";

const useBlueprint = () => {
	const dispatch = useDispatch();

	const { blockComponents = {} } = useSelector(
		(state) => state.blockBlueprint,
	);

	const getComponentById = useCallback(
		(clientId) => {
			return blockComponents?.[clientId] || null;
		},
		[blockComponents],
	);

	const _setComponentAttribute = (clientId, attribute, value) => {
		dispatch(setComponentAttribute({ clientId, attribute, value }));
	};

	const _unsetComponentAttribute = (clientId, attribute) => {
		dispatch(unsetComponentAttribute({ clientId, attribute }));
	};

	return {
		allComponents: blockComponents,
		getComponentById,
		setComponentAttribute: _setComponentAttribute,
		unsetComponentAttribute: _unsetComponentAttribute,
	};
};

export default useBlueprint;
