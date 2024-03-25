import { useCallback, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import useBlockJson from "./use-block-json";
import useBlueprint from "./use-blueprint";

import { BlueprintConnectionsContext } from "../contexts";

import {
	getHandlePosition,
	setHandlePosition,
} from "../store/block-connections";

//import { getAttributeById } from "../store/block-json";

const useBlueprintConnections = () => {
	const dispatch = useDispatch();

	const { blockAttributeNames, getAttributeById } = useBlockJson();
	const { blockComponents, unsetComponentAttribute } = useBlueprint();

	const connnectionsContext = useContext(BlueprintConnectionsContext);

	const componentAttributes = useMemo(
		() =>
			Object.entries(blockComponents)
				.filter(
					([_, { attributeName = null }]) => attributeName !== null,
				)
				.map(([clientId, { attributeName }]) => ({
					attributeName,
					clientId,
				})),
		[blockComponents],
	);

	const blockAttributes = useMemo(
		() =>
			componentAttributes.filter(({ attributeName }) =>
				blockAttributeNames.includes(attributeName),
			),
		[blockAttributeNames, componentAttributes],
	);

	const { handlePositions } = useSelector((state) => {
		return state.blockConnections || {};
	});

	const _getHandlePosition = useCallback(
		(clientId) =>
			useSelector((state) =>
				getHandlePosition(state.blockConnections, clientId),
			),
		[],
	);

	const removeConnection = useCallback((clientId) => {
		unsetComponentAttribute(clientId, "attributeName");
	}, []);

	const setConnection = useCallback((from, to) => {
		//console.log(from, to);
		/*const attribute = useSelector((state) =>
			getAttributeById(state.blockJson, from),
		);*/
		const attribute = getAttributeById(from);
		console.log(attribute);
	});

	const _setHandlePosition = useCallback(({ clientId, x, y }) => {
		dispatch(setHandlePosition({ clientId, x, y }));
	}, []);

	return {
		...connnectionsContext,
		getHandlePosition: _getHandlePosition,
		handlePositions,
		removeConnection,
		setConnection,
		setHandlePosition: _setHandlePosition,
	};
};

export default useBlueprintConnections;
