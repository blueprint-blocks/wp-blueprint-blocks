import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import useBlockJson from "./use-block-json";
import useBlueprint from "./use-blueprint";

import {
	setDraggingConnection,
	setPosition,
	unsetDraggingConnection,
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

	const { draggingConnection, handlesFrom, handlesTo } = useSelector(
		(state) => {
			return state.connectionHandles || {};
		},
	);

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

	const _unsetDraggingConnection = useCallback(() => {
		dispatch(unsetDraggingConnection());
	}, []);

	const _setDraggingConnection = useCallback(
		({ attributeName, from, to }) => {
			dispatch(setDraggingConnection({ attributeName, from, to }));
		},
		[],
	);

	const setHandlePosition = useCallback((handlePosition) => {
		dispatch(setPosition(handlePosition));
	}, []);

	return {
		allConnections: allConnections || [],
		connectionsById: connectionsById || {},
		draggingConnection,
		handlesFrom,
		handlesTo,
		unsetDraggingConnection: _unsetDraggingConnection,
		setDraggingConnection: _setDraggingConnection,
		setHandlePosition,
	};
};

export default useBlueprintConnections;
