import { useSelector } from "react-redux";

import { useBlueprintConnections } from "../../hooks";

import BlueprintConnection from "../BlueprintConnection";

import "./style.css";

function BlueprintConnections({}) {
	const { allConnections, draggingNewConnection = {} } =
		useBlueprintConnections();

	const editor = useSelector((state) => {
		return state.editor || {};
	});

	return (
		<div className="BlueprintConnections">
			<svg
				width={editor.width}
				height={editor.height}
				viewBox={`0 0 ${editor.width} ${editor.height}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="none"
				strokeWidth="0"
			>
				{allConnections.map(({ from, to }, i) => (
					<BlueprintConnection key={i} from={from} to={to} />
				))}
				{draggingNewConnection && (
					<BlueprintConnection {...draggingNewConnection} />
				)}
			</svg>
		</div>
	);
}

export default BlueprintConnections;
