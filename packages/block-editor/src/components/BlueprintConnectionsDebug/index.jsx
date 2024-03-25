import { useBlueprintConnections } from "../../hooks";

import "./style.css";

function BlueprintConnectionsDebug() {
	if (
		process.env.NODE_ENV !== "development" ||
		env.DEBUG_CONNECTIONS !== true
	) {
		return null;
	}

	const {
		allConnections,
		existingDraggingConnection,
		newDraggingConnection,
		handlePositions,
	} = useBlueprintConnections();

	return (
		<div className="BlueprintConnectionsDebug">
			<div className="BlueprintConnectionsDebug-title">
				{"Connections"}
			</div>
			<div className="BlueprintConnectionsDebug-list">
				{Object.values(allConnections).map(({ from, to }, index) => (
					<div key={index}>
						<div className="BlueprintConnectionsDebug-from">{`${from}:`}</div>
						<div className="BlueprintConnectionsDebug-to">{to}</div>
					</div>
				))}
			</div>
			<div className="BlueprintConnectionsDebug-title">
				{"Handle Positions"}
			</div>
			<div className="BlueprintConnectionsDebug-list">
				{Object.entries(handlePositions).map(
					([clientId, { x, y }], index) => (
						<div key={index}>
							<div className="BlueprintConnectionsDebug-clientId">
								{clientId}
							</div>
							<div className="BlueprintConnectionsDebug-position">{`${x}, ${y}`}</div>
						</div>
					),
				)}
			</div>
			{newDraggingConnection && (
				<>
					<div className="BlueprintConnectionsDebug-title">
						{"Dragging Connection"}
					</div>
					<div className="BlueprintConnectionsDebug-list">
						<div className="BlueprintConnectionsDebug-clientId">
							{newDraggingConnection?.clientId}
						</div>
						<div className="BlueprintConnectionsDebug-position">{`${newDraggingConnection?.from?.x}, ${newDraggingConnection?.from?.y} -> ${newDraggingConnection?.to?.x}, ${newDraggingConnection?.to?.y}`}</div>
					</div>
				</>
			)}
			{existingDraggingConnection && (
				<>
					<div className="BlueprintConnectionsDebug-title">
						{"Dragging Connection"}
					</div>
					<div className="BlueprintConnectionsDebug-list">
						<div className="BlueprintConnectionsDebug-clientId">
							{existingDraggingConnection?.clientId}
						</div>
						<div className="BlueprintConnectionsDebug-position">{`${existingDraggingConnection?.from?.x}, ${existingDraggingConnection?.from?.y} -> ${existingDraggingConnection?.to?.x}, ${existingDraggingConnection?.to?.y}`}</div>
					</div>
				</>
			)}
		</div>
	);
}

export default BlueprintConnectionsDebug;
