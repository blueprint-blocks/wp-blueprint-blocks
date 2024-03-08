import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import useBlockJson from "./use-block-json";
import useBlueprint from "./use-blueprint";

import {
	startDraggingExistingConnection,
	startDraggingNewConnection,
	setPosition,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
} from "../store/connection-handles";

const useBlueprintConnections = () => {
	const dispatch = useDispatch();

	const { blockAttributes } = useBlockJson();
	const { allComponents } = useBlueprint();

	const componentAttributes = useMemo(
		() =>
			Object.entries(allComponents)
				.filter(
					([_, { attributeName = null }]) => attributeName !== null,
				)
				.map(([clientId, { attributeName }]) => ({
					attributeName,
					clientId,
				})),
		[allComponents],
	);

	const _blockAttributes = useMemo(
		() =>
			componentAttributes.filter(
				({ attributeName }) => attributeName in blockAttributes,
			),
		[componentAttributes, blockAttributes],
	);

	const {
		draggingExistingConnection,
		draggingNewConnection,
		handlesFrom,
		handlesTo,
	} = useSelector((state) => {
		return state.connectionHandles || {};
	});

	const allConnections = useMemo(() => {
		const allConnections = [];

		_blockAttributes.forEach(({ attributeName, clientId }) => {
			if (!(attributeName in handlesFrom) || !(clientId in handlesTo)) {
				return;
			}

			allConnections.push({
				attributeName,
				clientId,
				from: {
					x: handlesFrom[attributeName].x || null,
					y: handlesFrom[attributeName].y || null,
				},
				to: {
					x: handlesTo[clientId].x || null,
					y: handlesTo[clientId].y || null,
				},
			});
		});

		return allConnections;
	}, [blockAttributes, _blockAttributes, handlesFrom, handlesTo]);

	const connectionsById = useMemo(() => {
		const connectionsById = {};

		_blockAttributes.forEach(({ attributeName, clientId }) => {
			if (!(attributeName in handlesFrom) || !(clientId in handlesTo)) {
				return;
			}

			connectionsById[attributeName] =
				connectionsById[attributeName] || [];
			connectionsById[attributeName].push(clientId);
		});

		return connectionsById;
	}, [_blockAttributes, handlesFrom, handlesTo]);

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
		({ attributeName, from, to }) => {
			dispatch(
				startDraggingNewConnection({
					attributeName,
					from,
					to,
				}),
			);
		},
		[],
	);

	const setHandlePosition = useCallback((handlePosition) => {
		dispatch(setPosition(handlePosition));
	}, []);

	const _stopDraggingExistingConnection = useCallback(() => {
		dispatch(stopDraggingExistingConnection());
	}, []);

	const _stopDraggingNewConnection = useCallback(() => {
		dispatch(stopDraggingNewConnection());
	}, []);

	return {
		allConnections: allConnections || [],
		connectionsById: connectionsById || {},
		draggingExistingConnection,
		draggingNewConnection,
		handlesFrom,
		handlesTo,
		setHandlePosition,
		startDraggingExistingConnection: _startDraggingExistingConnection,
		startDraggingNewConnection: _startDraggingNewConnection,
		stopDraggingExistingConnection: _stopDraggingExistingConnection,
		stopDraggingNewConnection: _stopDraggingNewConnection,
	};
};

export default useBlueprintConnections;
