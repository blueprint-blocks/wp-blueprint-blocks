import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getBlockComponent,
	setComponentAttribute,
	unsetComponentAttribute,
} from "../store/block-blueprint";

const useBlueprint = () => {
	const dispatch = useDispatch();

	const blockComponents = useSelector(
		(state) => state.blockBlueprint.blockComponents,
	);

	const getComponentById = (clientId) =>
		useSelector((state) => getBlockComponent(state, clientId));

	const getComponentsByAttributeName = useCallback(
		(attributeName) => {
			return Object.fromEntries(
				Object.entries(blockComponents).filter(
					([_, blockComponent]) =>
						blockComponent?.attributeName === attributeName,
				),
			);
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
		getComponentsByAttributeName,
		setComponentAttribute: _setComponentAttribute,
		unsetComponentAttribute: _unsetComponentAttribute,
	};
};

export default useBlueprint;
