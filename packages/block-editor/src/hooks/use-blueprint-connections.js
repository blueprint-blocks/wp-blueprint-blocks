import { useCallback, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import useBlockJson from "./use-block-json";
import useBlueprint from "./use-blueprint";

import { BlueprintConnectionsContext } from "../contexts";

import {
	startDraggingExistingConnection,
	startDraggingNewConnection,
	setHandlePosition,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
} from "../store/block-connections";

const useBlueprintConnections = () => {
	const dispatch = useDispatch();

	const { blockAttributeNames } = useBlockJson();
	const { blockComponents } = useBlueprint();

	const { allConnections, getHandlePosition } = useContext(
		BlueprintConnectionsContext,
	);

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

	const {
		draggingExistingConnection,
		draggingNewConnection,
		handlePositions,
		handlesFrom,
		handlesTo,
	} = useSelector((state) => {
		return state.blockConnections || {};
	});

	const _startDraggingExistingConnection = useCallback(
		({ attributeName, clientId }) => {
			dispatch(
				startDraggingExistingConnection({
					attributeName,
					clientId,
				}),
			);
		},
		[],
	);

	const _startDraggingNewConnection = useCallback(
		({ clientId, from, to }) => {
			dispatch(
				startDraggingNewConnection({
					clientId,
					from,
					to,
				}),
			);
		},
		[],
	);

	const setHandlePosition = useCallback((handlePosition) => {
		dispatch(setHandlePosition(handlePosition));
	}, []);

	const _stopDraggingExistingConnection = useCallback(() => {
		dispatch(stopDraggingExistingConnection());
	}, []);

	const _stopDraggingNewConnection = useCallback(() => {
		dispatch(stopDraggingNewConnection());
	}, []);

	return {
		allConnections,
		draggingExistingConnection,
		draggingNewConnection,
		getHandlePosition,
		handlesFrom,
		handlesTo,
		handlePositions,
		setHandlePosition,
		startDraggingExistingConnection: _startDraggingExistingConnection,
		startDraggingNewConnection: _startDraggingNewConnection,
		stopDraggingExistingConnection: _stopDraggingExistingConnection,
		stopDraggingNewConnection: _stopDraggingNewConnection,
	};
};

export default useBlueprintConnections;
