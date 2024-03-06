import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useMouseFocus } from "../../hooks";

import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

function BlueprintHint({ text = "", editorRef = null, indent = 0, onDrop }) {
	const ref = useRef(null);
	const hasFocus = useMouseFocus(ref);

	const isDragging = useSelector((state) => state.blockBlueprint.isDragging);

	const wasDragging = useSelector(
		(state) =>
			!!state.blockBlueprint.existingDraggingComponent ||
			!!state.blockBlueprint.newDraggingComponent,
	);

	useEffect(() => {
		if (isDragging === false && wasDragging === true && hasFocus === true) {
			onDrop && onDrop();
		}
	}, [isDragging, hasFocus]);

	useLayoutEffect(() => {
		ref.current.classList.toggle("has-focus", isDragging && hasFocus);
	}, [isDragging, hasFocus]);

	useLayoutEffect(() => {
		ref.current.style.setProperty("--indent", indent);
	}, [indent]);

	return (
		<div ref={ref} className="BlueprintHint">
			<div className="BlueprintHint-wrap">
				<div className="BlueprintHint-text">{text}</div>
				<div className="BlueprintHint-insert">
					<div />
				</div>
			</div>

			{process.env.NODE_ENV === "development" && (
				<BlueprintDebugRect debugRef={ref} parentRef={editorRef} />
			)}
		</div>
	);
}

export default BlueprintHint;
