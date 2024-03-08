import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { unsetComponentAttribute } from "../store/block-blueprint";

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

	const _unsetComponentAttribute = (clientId, attribute) => {
		dispatch(unsetComponentAttribute({ clientId, attribute }));
	};

	return {
		allComponents: blockComponents,
		getComponentById,
		unsetComponentAttribute: _unsetComponentAttribute,
	};
};

export default useBlueprint;
