import clsx from "clsx";
import { useRef } from "react";

import {
	useDebugRenderCount,
	useEditorDrag,
	useEditorDrop,
	useMouseFocus,
} from "../../hooks";

import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

function BlueprintHint({ text = "", editorRef = null, indent = 0, onDrop }) {
	const ref = useRef(null);
	const hasFocus = useMouseFocus(ref);
	const { isDragging } = useEditorDrag();

	useEditorDrop(
		{ ref, context: ["existingComponent", "newComponent"] },
		onDrop,
	);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintHint", {
				"has-focus": isDragging && hasFocus,
			})}
			style={{ "--indent": indent }}
		>
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
