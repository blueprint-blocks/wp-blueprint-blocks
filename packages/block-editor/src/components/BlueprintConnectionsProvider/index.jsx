import { useCallback, useLayoutEffect, useState } from "react";

import { BlueprintConnectionsContext } from "../../contexts";
import { useBlockJson, useBlueprint, useDebugRenderCount } from "../../hooks";

function BlueprintConnectionsProvider({ children }) {
	const [allConnections, setAllConnections] = useState([]);
	const [draggingConnection, setDraggingConnection] = useState(null);
	const [handlePositions, setHandlePositions] = useState({});

	const { blockAttributes } = useBlockJson();
	const { getComponentsByAttributeName } = useBlueprint();

	const getHandlePosition = useCallback(
		(clientId) => {
			if (clientId in handlePositions) {
				return handlePositions[clientId];
			}
			return null;
		},
		[handlePositions],
	);

	const setHandlePosition = useCallback(
		({ clientId, context = "from", x = 0, y = 0 }) => {
			if (
				x === handlePositions?.[clientId]?.x &&
				y === handlePositions?.[clientId]?.y
			) {
				return;
			}

			setHandlePositions({
				...handlePositions,
				[clientId]: {
					context: (context === "from" && "from") || "to",
					x,
					y,
				},
			});
		},
		[handlePositions],
	);

	/*const startDraggingNewConnection = ({ clientId, to }) => {
		state.draggingNewConnection = {
			clientId,
			context: (context === "from" && "from") || "to",
			from: {
				x: from?.x || null,
				y: from?.y || null,
			},
			to: {
				x: to?.x || null,
				y: to?.y || null,
			},
		};
	};*/

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
	}, []);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintConnectionsProvider");
	}

	return (
		<BlueprintConnectionsContext.Provider
			value={{
				allConnections,
				getHandlePosition,
				handlePositions,
				setHandlePosition,
			}}
		>
			{children}
		</BlueprintConnectionsContext.Provider>
	);
}

export default BlueprintConnectionsProvider;
