import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { useBlueprintConnections } from "../../hooks";

import BlueprintConnection from "../BlueprintConnection";
import BlueprintConnectionsDebug from "../BlueprintConnectionsDebug";

import "./style.css";

function BlueprintConnections({}) {
	const ref = useRef(null);

	const { allConnections } = useBlueprintConnections();

	const editor = useSelector((state) => {
		return state.editor || {};
	});

	return (
		<div ref={ref} className="BlueprintConnections">
			<BlueprintConnectionsDebug />
			<svg
				ref={ref}
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
			</svg>
		</div>
	);
}

export default BlueprintConnections;
