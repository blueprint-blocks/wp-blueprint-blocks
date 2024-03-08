import { useBlueprintConnections } from "../../hooks";

import "./style.css";

function BlueprintConnectionsDebug() {
	if (
		process.env.NODE_ENV !== "development" ||
		env.DEBUG_CONNECTIONS !== true
	) {
		return null;
	}

	const { connectionsById } = useBlueprintConnections();

	return (
		<div className="BlueprintConnectionsDebug">
			<div className="BlueprintConnectionsDebug-title">
				{"Connections"}
			</div>
			<div className="BlueprintConnectionsDebug-list">
				{Object.entries(connectionsById).map(
					([attributeName, clientIds], index) => (
						<>
							<div
								key={`${index}-1`}
								className="BlueprintConnectionsDebug-attributeName"
							>{`${attributeName}:`}</div>
							<div
								key={`${index}-2`}
								className="BlueprintConnectionsDebug-clientId"
							>
								{clientIds.map((clientId) => (
									<div>{clientId}</div>
								))}
							</div>
						</>
					),
				)}
			</div>
		</div>
	);
}

export default BlueprintConnectionsDebug;
