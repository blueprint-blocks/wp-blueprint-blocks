import { useCallback, useLayoutEffect, useState } from "react";

import { BlueprintConnectionsContext } from "../../contexts";
import { useBlockJson, useBlueprint, useDebugRenderCount } from "../../hooks";

function BlueprintConnectionsProvider({ children }) {
	const [allConnections, setAllConnections] = useState([]);
	const [existingDraggingConnection, setExistingDraggingConnection] =
		useState(null);
	const [newDraggingConnection, setNewDraggingConnection] = useState(null);

	const { blockAttributes } = useBlockJson();
	const { blockComponents, getComponentsByAttributeName } = useBlueprint();

	const startDraggingExistingConnection = useCallback(
		({ attributeName, clientId, from, to }) => {
			setExistingDraggingConnection({
				attributeName,
				clientId,
				from: {
					x: from?.x || null,
					y: from?.y || null,
				},
				to: {
					x: to?.x || null,
					y: to?.y || null,
				},
			});
		},
		[],
	);

	const startDraggingNewConnection = useCallback(
		({ attributeName, clientId, from, to, type }) => {
			setNewDraggingConnection({
				attributeName,
				clientId,
				from: {
					x: from?.x || null,
					y: from?.y || null,
				},
				to: {
					x: to?.x || null,
					y: to?.y || null,
				},
				type,
			});
		},
		[],
	);

	const stopDraggingExistingConnection = useCallback(() => {
		setExistingDraggingConnection(null);
	}, []);

	const stopDraggingNewConnection = useCallback(() => {
		setNewDraggingConnection(null);
	}, []);

	useLayoutEffect(() => {
		const allConnections = [];

		blockAttributes.forEach((attribute) => {
			if (!attribute?.name) {
				return;
			}

			Object.keys(getComponentsByAttributeName(attribute.name)).forEach(
				(to) => {
					allConnections.push({
						from: attribute.clientId,
						to,
					});
				},
			);
		});

		setAllConnections(allConnections);
	}, [blockAttributes, blockComponents]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintConnectionsProvider");
	}

	return (
		<BlueprintConnectionsContext.Provider
			value={{
				allConnections,
				existingDraggingConnection,
				newDraggingConnection,
				startDraggingExistingConnection,
				startDraggingNewConnection,
				stopDraggingExistingConnection,
				stopDraggingNewConnection,
			}}
		>
			{children}
		</BlueprintConnectionsContext.Provider>
	);
}

export default BlueprintConnectionsProvider;
