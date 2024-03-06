import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useDebugRenderCount, useMouseFocus } from "../../hooks";

import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

function BlueprintInsert({ editorRef = null, indent = 0, onDrop }) {
	const ref = useRef(null);
	const focusRef = useRef(null);

	const hasFocus = useMouseFocus(focusRef);

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

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div ref={ref} className="BlueprintInsert">
			<div ref={focusRef} className="BlueprintInsert-line">
				<div />
			</div>

			{process.env.NODE_ENV === "development" && (
				<BlueprintDebugRect debugRef={focusRef} parentRef={editorRef} />
			)}
		</div>
	);
}

export default BlueprintInsert;
