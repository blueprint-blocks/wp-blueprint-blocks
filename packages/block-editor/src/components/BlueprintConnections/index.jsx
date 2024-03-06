import { useRef } from "react";
import { useSelector } from "react-redux";

import "./style.css";
import BlueprintConnection from "../BlueprintConnection";

function BlueprintConnections({}) {
	const ref = useRef(null);

	const { handlesByName } = useSelector((state) => {
		return state.connectionHandles || {};
	});

	const editor = useSelector((state) => {
		return state.editor || {};
	});

	return (
		<div ref={ref} className="BlueprintConnections">
			<svg
				ref={ref}
				className="BlueprintConnection"
				width={editor.width}
				height={editor.height}
				viewBox={`0 0 ${editor.width} ${editor.height}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="none"
				strokeWidth="0"
			>
				{Object.values(handlesByName).map(({ from, to }, i) =>
					to.map((to, j) => (
						<BlueprintConnection
							key={`${i}${j}`}
							from={from}
							to={to}
						/>
					)),
				)}
			</svg>
		</div>
	);
}

export default BlueprintConnections;
