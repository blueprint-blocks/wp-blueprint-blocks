import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getBlockComponent,
	renameComponentAttribute,
	setComponentAttribute,
	unsetComponentAttribute,
} from "../store/block-blueprint";

import { setChanged } from "../store/post-metadata";

const useBlueprint = () => {
	const dispatch = useDispatch();

	const blockComponents = useSelector(
		(state) => state.blockBlueprint.blockComponents,
	);

	const getComponentById = (clientId) =>
		useSelector((state) =>
			getBlockComponent(state.blockBlueprint, clientId),
		);

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

	const _renameComponentAttribute = (
		clientId,
		attributeName,
		newAttributeName,
	) => {
		dispatch(
			renameComponentAttribute({
				clientId,
				attributeName: attributeName,
				newAttributeName: newAttributeName,
			}),
		);
		dispatch(setChanged(true));
	};

	const _setComponentAttribute = (clientId, attribute, value) => {
		dispatch(setComponentAttribute({ clientId, attribute, value }));
		dispatch(setChanged(true));
	};

	const _unsetComponentAttribute = (clientId, attribute) => {
		dispatch(unsetComponentAttribute({ clientId, attribute }));
		dispatch(setChanged(true));
	};

	return {
		allComponents: blockComponents,
		getComponentById,
		getComponentsByAttributeName,
		renameComponentAttribute: _renameComponentAttribute,
		setComponentAttribute: _setComponentAttribute,
		unsetComponentAttribute: _unsetComponentAttribute,
	};
};

export default useBlueprint;
