import { useSelector } from "react-redux";

import { useBlueprintConnections } from "../../hooks";

import BlueprintConnection from "../BlueprintConnection";
import BlueprintConnectionsDebug from "../BlueprintConnectionsDebug";

import "./style.css";

function BlueprintConnections({}) {
	const { allConnections, draggingConnection = {} } =
		useBlueprintConnections();

	const editor = useSelector((state) => {
		return state.editor || {};
	});

	return (
		<div className="BlueprintConnections">
			<BlueprintConnectionsDebug />
			<svg
				width={editor.width}
				height={editor.height}
				viewBox={`0 0 ${editor.width} ${editor.height}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="none"
				strokeWidth="0"
			>
				{allConnections.map(
					({ attributeName, clientId, from, to }, i) => (
						<BlueprintConnection
							key={`${attributeName}-${clientId}`}
							attributeName={attributeName}
							clientId={clientId}
							from={from}
							to={to}
						/>
					),
				)}
				{draggingConnection && (
					<BlueprintConnection {...draggingConnection} />
				)}
			</svg>
		</div>
	);
}

export default BlueprintConnections;
