import clsx from "clsx";
import { memo, useRef } from "react";

import { useDebugRenderCount, useEditorDrag, useMouseFocus } from "../../hooks";

import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

const BlueprintInsert = memo(({ indent = 0, onDrop }) => {
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
				<BlueprintDebugRect debugRef={ref} />
			)}
		</div>
	);
});

export default BlueprintInsert;
