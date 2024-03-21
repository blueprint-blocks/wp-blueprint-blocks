import { useContext } from "react";

import { BlueprintConnectionsContext } from "../../contexts";
import { useBlueprintConnections } from "../../hooks";

import "./style.css";

function BlueprintConnectionsDebug() {
	if (
		process.env.NODE_ENV !== "development" ||
		env.DEBUG_CONNECTIONS !== true
	) {
		return null;
	}

	const { allConnections, handlePositions } = useContext(
		BlueprintConnectionsContext,
	);

	return (
		<div className="BlueprintConnectionsDebug">
			<div className="BlueprintConnectionsDebug-title">
				{"Connections"}
			</div>
			<div className="BlueprintConnectionsDebug-list">
				{Object.values(allConnections).map(({ from, to }) => (
					<>
						<div
							key={`${from}-1`}
							className="BlueprintConnectionsDebug-from"
						>{`${from}:`}</div>
						<div
							key={`${from}-2`}
							className="BlueprintConnectionsDebug-to"
						>
							{to}
						</div>
					</>
				))}
			</div>
			<div className="BlueprintConnectionsDebug-title">
				{"Handle Positions"}
			</div>
			<div className="BlueprintConnectionsDebug-list">
				{Object.entries(handlePositions).map(
					([clientId, { x, y }], index) => (
						<>
							<div
								key={`${clientId}`}
								className="BlueprintConnectionsDebug-clientId"
							>
								{clientId}
							</div>
							<div
								key={`${clientId}-xy`}
								className="BlueprintConnectionsDebug-position"
							>{`${x}, ${y}`}</div>
						</>
					),
				)}
			</div>
		</div>
	);
}

export default BlueprintConnectionsDebug;
