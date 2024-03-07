import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import useBlueprint from "./use-blueprint";

import { setPosition } from "../store/connection-handles";

const useBlueprintConnections = () => {
	const dispatch = useDispatch();
	const { allComponents } = useBlueprint();

	const blockAttributes = useMemo(
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

	const { handlesFrom, handlesTo } = useSelector((state) => {
		return state.connectionHandles || {};
	});

	const allConnections = useMemo(() => {
		const allConnections = [];

		blockAttributes.forEach(({ attributeName, clientId }) => {
			if (!(attributeName in handlesFrom) || !(clientId in handlesTo)) {
				return;
			}

			allConnections.push({
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
	}, [blockAttributes, handlesFrom, handlesTo]);

	const setHandlePosition = useCallback((handlePosition) => {
		dispatch(setPosition(handlePosition));
	}, []);

	return {
		allConnections: allConnections || [],
		setHandlePosition,
	};
};

export default useBlueprintConnections;
