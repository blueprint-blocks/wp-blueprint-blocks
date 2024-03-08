import clsx from "clsx";
import { useRef } from "react";

import { useDebugRenderCount, useEditorDrag, useMouseFocus } from "../../hooks";

import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

function BlueprintInsert({ editorRef = null, indent = 0, onDrop }) {
	const ref = useRef(null);
	const hasFocus = useMouseFocus(ref);

	const { isDragging } = useEditorDrag(
		{ context: ["existingComponent", "newComponent"], ref },
		onDrop,
	);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div
			className={clsx("BlueprintInsert", {
				"has-focus": isDragging && hasFocus,
			})}
			style={{ "--indent": indent }}
		>
			<div ref={ref} className="BlueprintInsert-line">
				<div />
			</div>

			{process.env.NODE_ENV === "development" && (
				<BlueprintDebugRect debugRef={ref} parentRef={editorRef} />
			)}
		</div>
	);
}

export default BlueprintInsert;
