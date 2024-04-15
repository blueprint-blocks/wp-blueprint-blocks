import clsx from "clsx";
import { useSelector } from "react-redux";

import { useBlueprintConnections, useTutorial } from "../../hooks";

import BlueprintConnection from "../BlueprintConnection";

import "./style.css";

function BlueprintConnections({}) {
	const tutorial = useTutorial();

	const { allConnections, newDraggingConnection = null } =
		useBlueprintConnections();

	const editor = useSelector((state) => {
		return state.editor || {};
	});

	return (
		<div
			className={clsx("BlueprintConnections", {
				"is-disabled": tutorial.isActive,
			})}
		>
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
				{newDraggingConnection && (
					<BlueprintConnection
						fromPosition={newDraggingConnection?.from}
						toPosition={newDraggingConnection?.to}
					/>
				)}
			</svg>
		</div>
	);
}

export default BlueprintConnections;
